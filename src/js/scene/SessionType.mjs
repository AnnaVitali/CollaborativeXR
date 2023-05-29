class SessionType {
    static ARSession = new SessionType("ar");
    static VRSession = new SessionType("vr");
    static XRSession = new SessionType("xr");

    constructor(name){
        this.name = name;
    }
}

export { SessionType };