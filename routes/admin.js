const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.post("/appointments", adminController.createAppointment);
router.get("/appointments", adminController.getAppointment);
router.delete("/appointments/:id", adminController.deleteAppointment);
module.exports = router;
