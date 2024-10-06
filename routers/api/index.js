const router = require("express").Router();
const routeLink = require("../../constants/routeLink");
const products = require("./products");
const users = require("./users");

router.use(routeLink.API_PRODUCT, products);
router.use(routeLink.API_USER, users);

module.exports = router;
