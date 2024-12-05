const {Router} =require("express");
const { getIndex, getmatrix } = require("../controller/routes_method");

const router = Router();

router.get("/",getIndex);
router.get("/x",getmatrix)

module.exports = router;