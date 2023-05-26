const SceneController = require("../../src/js/SceneController.js");
const test = require("unit.js");
const assert = require("assert")

const controller = new SceneController();
describe("SceneController", () => {
    describe("XRSession", () => {
        it("Should be: immersive-ar, immersive-vr and immersive-xr)", () =>{
            let expectedLength = 3;
            assert.strictEqual(controller.supportedWebXRSession.length, expectedLength);
            assert(controller.supportedWebXRSession.includes("immersive-ar"), true);
            assert(controller.supportedWebXRSession.includes("immersive-vr"), true);
            assert(controller.supportedWebXRSession.includes("immersive-xr"), true);
        })
    })
})
