const Croquet = require("croquet");
class ARSceneModel extends Croquet.Model {
    init(){
        this.linkedViews = [];

        this.subscribe(this.sessionId, "view-join", this.viewJoin);
        this.subscribe(this.sessionId, "view-exit", this.viewDrop);
    }

    /**
     * Handle a new connected view.
     * @param {any} viewId the id of the new view connected.
     */
    viewJoin(viewId){
        console.log("MODEL: received view join");
        this.linkedViews.push(viewId);
    }

    /**
     * Handle the view left event.
     * @param {any} viewId the id of the outgoing view.
     */
    viewDrop(viewId){
        console.log("MODEL: received view left");
        this.linkedViews.splice(this.linkedViews.indexOf(viewId),1);
        if(this.linkedViews.length === 0){
            this.destroy();
        }
    }

    createScene(){

    }
}

ARSceneModel.register("ARSceneModel");
module.exports = ARSceneModel;