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
const node_resource_1 = require("./node.resource");
class NamespaceResourceNode extends node_resource_1.ResourceNode {
    constructor(kind, name, metadata) {
        super(kind, name, metadata);
        this.kind = kind;
        this.name = name;
        this.metadata = metadata;
    }
    getTreeItem() {
        const _super = Object.create(null, {
            getTreeItem: { get: () => super.getTreeItem }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const treeItem = yield _super.getTreeItem.call(this);
            treeItem.contextValue = `vsKubernetes.resource.${this.kind.abbreviation}`;
            if (this.metadata.active) {
                treeItem.label = "* " + treeItem.label;
            }
            else {
                treeItem.contextValue += ".inactive";
            }
            return treeItem;
        });
    }
}
exports.NamespaceResourceNode = NamespaceResourceNode;
//# sourceMappingURL=node.resource.namespace.js.map