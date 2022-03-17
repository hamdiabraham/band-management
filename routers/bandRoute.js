const router = require("express").Router();
const bandController = require("../controllers/bandController");

router.post("/band", bandController.createBand);
router.get("/band", bandController.getAllBand);
router.get("/band/:bandId", bandController.getBandById);
router.patch("/band/:bandId", bandController.editBand);

module.exports = router;
