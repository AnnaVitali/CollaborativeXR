// Croquet Tutorial 1
// Hello World 
// Croquet Corporation 
// 2021

import { RootView } from "./RootView.js";
import { RootModel } from "./RootModel.js";

Croquet.Session.join({
    apiKey: '1Ms8POLqF7FJlrcmGNj4xx401r3E22bJs4LpMu4bH',
    appId: 'it.unibo.studio.anna_2evitali4.collaborativeXR',
    name: "unnamed",
    password: "secret",
    model: RootModel,
    view: RootView
});