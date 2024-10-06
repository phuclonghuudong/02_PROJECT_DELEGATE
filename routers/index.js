const router = require("express").Router();
const routeLink = require("../constants/routeLink");
const api = require("./api");

router.use(routeLink.API, api);
module.exports = router;
