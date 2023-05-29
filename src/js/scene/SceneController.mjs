//const RootModel = require("../croquet/RootModel.js");
class SceneController{
    constructor(){
        this.model = undefined;
        if (typeof window !== 'undefined') {
            this.canvas = document.getElementById("renderCanvas");
        }

    }

    renderAugmentedRealityExperience(){
       // this.model = RootModel.instantiateARSceneModel(this.canvas);
    }

    renderVirtualRealityExperience(){
       // this.model = RootModel.instantiateVRSceneModel(this.canvas);
    }

    renderExtendedRealityExperience(){
       // this.model = RootModel.instantiateXRSceneModel(this.canvas);
    }

}

export { SceneController };