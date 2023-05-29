import test from 'ava'
import assert from 'assert'
import  { Scene } from "../../../src/js/scene/Scene.mjs";
import {SessionType} from "../../../src/js/scene/SessionType.mjs";
//import  chai from "./chai.js";

const scene = new Scene();

test("Scene: At the beginning the XRSession is not defined", (textContext) => {
    textContext.is(scene.XRSession, undefined)
})

test("Scene: Require a predefined session should not throw an error", (textContext) => {
    assert.doesNotThrow(() => scene.createScene(SessionType.XRSession), new Error("Session type not supported"))
})