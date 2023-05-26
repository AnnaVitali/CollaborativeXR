class SceneController{
    constructor(){
        this.supportedWebXRSession = ['immersive-ar', 'immersive-vr', 'immersive-xr'];
    }

    createWebXRSession(sessionType){
        console.log(this.supportedWebXRSession)
        if(!this.supportedWebXRSession.includes(sessionType)){
            throw new Error("The required webXR session is not supported");
        }else{

        }
    }
}

module.exports = SceneController;