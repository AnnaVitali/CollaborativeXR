const Scene = require("../../src/js/Scene.js");
const test = require("unit.js");
const assert = require("assert");

const scene = new Scene();
describe("Scene", () => {
    describe("XRSession", () => {
        it("Should be undefined at the beginning)", () =>{
            assert(typeof scene.XRSession, undefined);
        })
    })
})