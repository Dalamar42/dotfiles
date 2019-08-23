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
const kubectlUtils = require("../../kubectlUtils");
const node_folder_resource_1 = require("./node.folder.resource");
const node_resource_configuration_1 = require("./node.resource.configuration");
class ConfigurationResourceFolder extends node_folder_resource_1.ResourceFolderNode {
    constructor(kind) {
        super(kind);
    }
    getChildren(kubectl, _host) {
        return __awaiter(this, void 0, void 0, function* () {
            const namespaces = yield kubectlUtils.getDataHolders(this.kind.abbreviation, kubectl);
            return namespaces.map((cm) => new node_resource_configuration_1.ConfigurationResourceNode(this.kind, cm.metadata.name, cm, cm.data));
        });
    }
}
exports.ConfigurationResourceFolder = ConfigurationResourceFolder;
//# sourceMappingURL=node.folder.configurationresources.js.map