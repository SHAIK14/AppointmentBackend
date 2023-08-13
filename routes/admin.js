const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.post("/appointments", adminController.createAppointment);
router.get("/appointments", adminController.getAppointment);
module.exports = router;
