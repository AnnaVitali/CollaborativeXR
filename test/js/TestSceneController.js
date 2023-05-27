const test = require("unit.js");
const assert = require("assert");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("SceneController", () => {
    describe("model", () => {
        beforeEach(() => {
            const dom = new JSDOM(
                `<!DOCTYPE html>
                        <html>
                        <head>
                            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                            <title>Collaborative WebXR Application</title>
                            <link rel="stylesheet" type="text/css" href="../css/style.css">
                        </head>
                        <body>
                            <script type="module" src="../js/croquet_session.js"></script>
                            <canvas id="renderCanvas"></canvas>
                        </body>
                        </html>`);
            global.window = dom.window;
            global.document = dom.window.document;

            const Scene = require("../../src/js/Scene.js");
            const SessionType = require("../../src/js/SessionType.js");
            const XRSceneModel = require("../../src/js/model/XRSceneModel.js");

            const scene = new Scene();
            const controller = scene.controller;
        });

        it("Should be undefined at the beginning", () =>{
            console.log(document.getElementById("renderCanvas"));
            assert(controller.model, undefined);
        })

        it("Should be XRSceneModel when an XR session is created", () => {
            scene.createScene(SessionType.XRSession);
            assert(typeof controller.model, XRSceneModel);
        })
    })
})
