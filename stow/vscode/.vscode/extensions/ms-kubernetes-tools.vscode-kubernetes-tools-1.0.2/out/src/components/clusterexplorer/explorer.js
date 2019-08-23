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
const config_1 = require("../config/config");
const providerResult = require("../../utils/providerresult");
const sleep_1 = require("../../sleep");
const explorer_1 = require("../clusterprovider/common/explorer");
const node_context_1 = require("./node.context");
exports.KUBERNETES_EXPLORER_NODE_CATEGORY = 'kubernetes-explorer-node';
function create(kubectl, host) {
    return new KubernetesExplorer(kubectl, host);
}
exports.create = create;
function isKubernetesExplorerResourceNode(obj) {
    return obj && obj.nodeCategory === exports.KUBERNETES_EXPLORER_NODE_CATEGORY && obj.nodeType === 'resource';
}
exports.isKubernetesExplorerResourceNode = isKubernetesExplorerResourceNode;
class KubernetesExplorer {
    constructor(kubectl, host) {
        this.kubectl = kubectl;
        this.host = host;
        this.onDidChangeTreeDataEmitter = new vscode.EventEmitter();
        this.onDidChangeTreeData = this.onDidChangeTreeDataEmitter.event;
        this.extenders = Array.of();
        this.customisers = Array.of();
        host.onDidChangeConfiguration((change) => {
            if (config_1.affectsUs(change)) {
                this.refresh();
            }
        });
    }
    getTreeItem(element) {
        const treeItem = element.getTreeItem();
        const treeItem2 = providerResult.transform(treeItem, (ti) => {
            if (ti.collapsibleState === vscode.TreeItemCollapsibleState.None && this.extenders.some((e) => e.contributesChildren(element))) {
                ti.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
            }
        });
        let treeItem3 = treeItem2;
        for (const c of this.customisers) {
            treeItem3 = providerResult.transformPossiblyAsync(treeItem2, (ti) => c.customize(element, ti));
        }
        return treeItem3;
    }
    getChildren(parent) {
        const baseChildren = this.getChildrenBase(parent);
        const contributedChildren = this.extenders
            .filter((e) => e.contributesChildren(parent))
            .map((e) => e.getChildren(this.kubectl, this.host, parent));
        return providerResult.append(baseChildren, ...contributedChildren);
    }
    getChildrenBase(parent) {
        if (parent) {
            return parent.getChildren(this.kubectl, this.host);
        }
        return this.getClusters();
    }
    refresh() {
        this.onDidChangeTreeDataEmitter.fire();
    }
    registerExtender(extender) {
        this.extenders.push(extender);
        // In the case where an extender contributes at top level (sibling to cluster nodes),
        // the tree view can populate before the extender has time to register.  So in this
        // case we need to kick off a refresh.  But... it turns out that if we just fire the
        // change event, VS Code goes 'oh well I'm just drawing the thing now so I'll be
        // picking up the change, no need to repopulate a second time.'  Even with a delay
        // there's a race condition.  But it seems that if we pipe it through the refresh
        // *command* (as refreshExplorer does) then it seems to work... ON MY MACHINE TM anyway.
        //
        // This is a pretty niche case, so I'm not too worried if this isn't perfect.
        //
        // TODO: VS Code now doesn't require a reload on extension install.  Do we need
        // to listen for the extension install event and refresh, in case an extension
        // attempts to contribute while the tree view is already open?
        //
        // TODO: we need to check collapsibleStates in case someone adds child nodes to a
        // parent which currently has CollapsibleState.None.
        if (extender.contributesChildren(undefined)) {
            sleep_1.sleep(50).then(() => explorer_1.refreshExplorer());
        }
    }
    registerUICustomiser(customiser) {
        this.customisers.push(customiser);
        sleep_1.sleep(50).then(() => explorer_1.refreshExplorer());
    }
    getClusters() {
        return __awaiter(this, void 0, void 0, function* () {
            const contexts = yield kubectlUtils.getContexts(this.kubectl);
            return contexts.map((context) => {
                // TODO: this is slightly hacky...
                if (context.contextName === 'minikube') {
                    return new node_context_1.MiniKubeContextNode(context.contextName, context);
                }
                return new node_context_1.ContextNode(context.contextName, context);
            });
        });
    }
}
exports.KubernetesExplorer = KubernetesExplorer;
//# sourceMappingURL=explorer.js.map