const router = require("express").Router();
const personnelController = require("../controllers/personnelController");

router.post("/personnel", personnelController.createPersonnel);
router.get("/personnel", personnelController.getAllPersonnel);

module.exports = router;
