"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kuberesources = require("../../kuberesources");
const node_folder_1 = require("./node.folder");
const node_folder_resource_1 = require("./node.folder.resource");
class GroupingFolderNode extends node_folder_1.FolderNode {
    constructor(nodeType, id, displayName, contextValue) {
        super(nodeType, id, displayName, contextValue);
        this.nodeType = 'folder.grouping';
    }
    static of(id, displayName, ...kinds) {
        return new ResourceKindsGroupingFolder(id, displayName, kinds);
    }
}
exports.GroupingFolderNode = GroupingFolderNode;
exports.workloadsGroupingFolder = () => GroupingFolderNode.of("workload", "Workloads", kuberesources.allKinds.deployment, kuberesources.allKinds.statefulSet, kuberesources.allKinds.daemonSet, kuberesources.allKinds.job, kuberesources.allKinds.cronjob, kuberesources.allKinds.pod);
class ResourceKindsGroupingFolder extends GroupingFolderNode {
    constructor(id, displayName, kinds) {
        super("folder.grouping", id, displayName);
        this.kinds = kinds;
    }
    getChildren(_kubectl, _host) {
        return this.kinds.map((k) => node_folder_resource_1.ResourceFolderNode.create(k));
    }
}
exports.configurationGroupingFolder = () => GroupingFolderNode.of("config", "Configuration", kuberesources.allKinds.configMap, kuberesources.allKinds.secret);
exports.networkGroupingFolder = () => GroupingFolderNode.of("network", "Network", kuberesources.allKinds.service, kuberesources.allKinds.endpoint, kuberesources.allKinds.ingress);
exports.storageGroupingFolder = () => GroupingFolderNode.of("storage", "Storage", kuberesources.allKinds.persistentVolume, kuberesources.allKinds.persistentVolumeClaim, kuberesources.allKinds.storageClass);
//# sourceMappingURL=node.folder.grouping.js.map