import Appointment from "../models/Appointment.js";

class AppointmentController {
  async index(req, res) {
    const appointments = await Appointment.find();

    return res.json(appointments);
  }

  async store(req, res) {
    try {
      console.log(req.body); // deixe esta linha

      const appointment = await Appointment.create(req.body);

      return res.status(201).json(appointment);
    } catch (error) {
      console.log(error);

      return res.status(400).json({
        error: error.message,
      });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Appointment.findByIdAndDelete(id);

    return res.status(204).send();
  }
}

export default new AppointmentController();