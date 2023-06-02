import {SessionType} from "./SessionType.js";
import {SceneController} from "./SceneController.js";
class Scene{

    constructor(){
        this.XRSession = undefined;
        this.controller = new SceneController();
    }

    createScene(sessionType){
        const canvas = document.createElement("canvas", {id: "renderCanvas"});
        document.body.appendChild(canvas);
        console.log(document.body)

        switch(sessionType){
            case SessionType.ARSession:
                this.controller.renderAugmentedRealityExperience(canvas);
                break
            case SessionType.VRSession:
                this.controller.renderVirtualRealityExperience(canvas);
                break
            case SessionType.XRSession:
                this.controller.renderExtendedRealityExperience(canvas);
                break
            default:
                throw new Error("Session type not supported");
        }

    }

}

export { Scene };