"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kuberesources = require("../../kuberesources");
const node_folder_grouping_custom_1 = require("./node.folder.grouping.custom");
const node_folder_resource_1 = require("./node.folder.resource");
const errorable_1 = require("../../errorable");
const node_message_1 = require("./node.message");
const node_resource_1 = require("./node.resource");
class NodeSourceImpl {
    at(parent) {
        return new ContributedNodeSourceExtender(parent, this);
    }
    if(condition) {
        return new ConditionalNodeSource(this, condition);
    }
}
exports.NodeSourceImpl = NodeSourceImpl;
class CustomResourceFolderNodeSource extends NodeSourceImpl {
    constructor(resourceKind) {
        super();
        this.resourceKind = resourceKind;
    }
    nodes(_kubectl, _host) {
        return __awaiter(this, void 0, void 0, function* () {
            return [node_folder_resource_1.ResourceFolderNode.create(this.resourceKind)];
        });
    }
}
exports.CustomResourceFolderNodeSource = CustomResourceFolderNodeSource;
class AllResourcesNodeSource extends NodeSourceImpl {
    constructor(manifestKind, abbreviation) {
        super();
        this.kind = new kuberesources.ResourceKind(manifestKind, manifestKind, manifestKind, abbreviation);
    }
    nodes(kubectl, host) {
        return __awaiter(this, void 0, void 0, function* () {
            const childrenLines = yield kubectl.asLines(`get ${this.kind.abbreviation}`);
            if (errorable_1.failed(childrenLines)) {
                host.showErrorMessage(childrenLines.error[0]);
                return [new node_message_1.MessageNode("Error")];
            }
            return childrenLines.result.map((line) => {
                const bits = line.split(' ');
                return node_resource_1.ResourceNode.create(this.kind, bits[0], undefined, undefined);
            });
        });
    }
}
exports.AllResourcesNodeSource = AllResourcesNodeSource;
class CustomGroupingFolderNodeSource extends NodeSourceImpl {
    constructor(displayName, contextValue, children) {
        super();
        this.displayName = displayName;
        this.contextValue = contextValue;
        this.children = children;
    }
    nodes(_kubectl, _host) {
        return __awaiter(this, void 0, void 0, function* () {
            return [new node_folder_grouping_custom_1.ContributedGroupingFolderNode(this.displayName, this.contextValue, this.children)];
        });
    }
}
exports.CustomGroupingFolderNodeSource = CustomGroupingFolderNodeSource;
class ConditionalNodeSource extends NodeSourceImpl {
    constructor(impl, condition) {
        super();
        this.impl = impl;
        this.condition = condition;
    }
    nodes(kubectl, host) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.condition()) {
                return this.impl.nodes(kubectl, host);
            }
            return [];
        });
    }
}
class ContributedNodeSourceExtender {
    constructor(under, nodeSource) {
        this.under = under;
        this.nodeSource = nodeSource;
    }
    contributesChildren(parent) {
        if (!parent) {
            return false;
        }
        if (this.under) {
            return parent.nodeType === 'folder.grouping' && parent.displayName === this.under;
        }
        return parent.nodeType === 'context' && parent.kubectlContext.active;
    }
    getChildren(kubectl, host, _parent) {
        return this.nodeSource.nodes(kubectl, host);
    }
}
exports.ContributedNodeSourceExtender = ContributedNodeSourceExtender;
//# sourceMappingURL=extension.nodesources.js.map