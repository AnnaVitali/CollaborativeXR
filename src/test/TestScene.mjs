import test from 'ava'
import assert from 'assert'
import  { Scene } from "../js/scene/Scene.mjs";
import {SessionType} from "../js/scene/SessionType.mjs";
//import  chai from "./chai.js";

const scene = new Scene();

test("At the beginning the XRSession is not defined", (t) => {
    t.is(scene.XRSession, undefined)
})

test("Require a predefined session should not throw an error", (t) => {
    assert.doesNotThrow(() => scene.createScene(SessionType.XRSession), new Error("Session type not supported"))
})