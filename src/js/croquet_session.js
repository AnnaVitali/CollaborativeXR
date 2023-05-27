const RootModel = require("./model/RootModel.js");
const RootView = require("./view/RootView.js");
const Croquet = require("croquet");

Croquet.Session.join({
    apiKey: '1NzbxqoNq7g8rgM9KL1E7vLNr6OJE46tAxzqOcdzo',
    appId: 'it.unibo.studio.anna_2evitali4.CroquetOSExample_myapp',
    name: "unnamed",
    password: "secret",
    model: RootModel,
    view: RootView
});