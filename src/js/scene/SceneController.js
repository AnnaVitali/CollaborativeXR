import { RootModel } from "../croquet/RootModel.js";

class SceneController{
    constructor(){
        this.model = undefined;
        if (typeof window !== 'undefined') {
        }

    }

    renderAugmentedRealityExperience(canvas){
      //RootModel.instantiateARSceneModel(canvas);
    }

    renderVirtualRealityExperience(canvas){
       //RootModel.instantiateVRSceneModel(canvas);
    }

    renderExtendedRealityExperience(canvas){
       //RootModel.instantiateXRSceneModel(canvas);
    }

}

export { SceneController };