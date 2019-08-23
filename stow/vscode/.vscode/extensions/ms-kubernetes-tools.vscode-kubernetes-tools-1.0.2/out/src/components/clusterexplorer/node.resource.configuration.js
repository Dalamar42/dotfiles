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
const node_resource_1 = require("./node.resource");
const node_configurationvalue_1 = require("./node.configurationvalue");
class ConfigurationResourceNode extends node_resource_1.ResourceNode {
    constructor(kind, name, metadata, data) {
        super(kind, name, metadata);
        this.kind = kind;
        this.name = name;
        this.metadata = metadata;
        this.data = data;
        this.configData = data;
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
    getChildren(_kubectl, _host) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.configData || this.configData.length === 0) {
                return [];
            }
            const files = Object.keys(this.configData);
            return files.map((f) => new node_configurationvalue_1.ConfigurationValueNode(this.configData, f, this.kind, this.name));
        });
    }
}
exports.ConfigurationResourceNode = ConfigurationResourceNode;
//# sourceMappingURL=node.resource.configuration.js.map