const { Router } = require("express");

const computers = require("./computers")
const others = require("./others")
const phone = require("./phones")
const sectores = require("./sectores")
const fulldb = require("./fulldb")
const testingplatcas = require("./testingplatcas")

const router = Router();

router.use("/computers", computers);
router.use("/phones", phone);
router.use("/others", others);
router.use("/sectores", sectores)
router.use("/fulldb", fulldb)
router.use("/testingplatcas", testingplatcas)


module.exports = router;
