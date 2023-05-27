const Scene = require("../../src/js/Scene.js");
const test = require("unit.js");
const SessionType = require("../../src/js/SessionType.js")
const assert = require("assert");

const scene = new Scene();
describe("Scene", () => {
    describe("XRSession", () => {
        it("Should be undefined at the beginning", () =>{
            assert(typeof scene.XRSession, undefined);
        })
    })
})

describe("Scene", () => {
    describe("createScene()", () => {
        it("Not throw an error for a supported session", () =>{
            assert.doesNotThrow( () => scene.createScene(SessionType.XRSession), new Error("Session type not supported"));
        })
    })
})