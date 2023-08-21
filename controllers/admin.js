const Appointment = require("../models/appointment");

exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phonenumber } = req.body;
    console.log("data received", req.body);
    const newAppointment = await Appointment.create({
      name,
      email,
      phonenumber,
    });
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({
      error: "An error occurred while creating the appointment",
      details: error.message,
    });
  }
};

exports.getAppointment = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error getting appointments:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting appointments" });
  }
};
exports.deleteAppointment = async (req, res) => {
  const appointmentId = req.params.id;
  try {
    const appointment = await Appointment.findByPk(appointmentId);
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    await appointment.destroy();
    res.status(204).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the appointment" });
  }
};
