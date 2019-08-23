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
const vscode = require("vscode");
const kubectlUtils = require("../../kubectlUtils");
const kuberesources = require("../../kuberesources");
const node_resource_1 = require("./node.resource");
class NodeClusterExplorerNode extends node_resource_1.ResourceNode {
    constructor(name, meta) {
        super(kuberesources.allKinds.node, name, meta);
    }
    getTreeItem() {
        const _super = Object.create(null, {
            getTreeItem: { get: () => super.getTreeItem }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const treeItem = yield _super.getTreeItem.call(this);
            treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
            return treeItem;
        });
    }
    getChildren(kubectl, _host) {
        return __awaiter(this, void 0, void 0, function* () {
            const pods = yield kubectlUtils.getPods(kubectl, null, 'all');
            const filteredPods = pods.filter((p) => `node/${p.nodeName}` === this.kindName);
            return filteredPods.map((p) => new node_resource_1.ResourceNode(kuberesources.allKinds.pod, p.name, p));
        });
    }
}
exports.NodeClusterExplorerNode = NodeClusterExplorerNode;
//# sourceMappingURL=node.resource.node.js.map