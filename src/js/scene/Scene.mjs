import {SessionType} from "./SessionType.mjs";
import {SceneController} from "./SceneController.mjs";
class Scene{

    constructor(){
        this.XRSession = undefined;
        this.controller = new SceneController();
    }

    createScene(sessionType){
        switch(sessionType){
            case SessionType.ARSession:
                this.controller.renderAugmentedRealityExperience();
                break
            case SessionType.VRSession:
                this.controller.renderVirtualRealityExperience();
                break
            case SessionType.XRSession:
                this.controller.renderExtendedRealityExperience();
                break
            default:
                throw new Error("Session type not supported");
        }

    }

}

export { Scene };