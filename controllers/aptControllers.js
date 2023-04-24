const Appointment = require("../models/Appointment");

const createAppointment = async (req, res) => {
  try {
    const { firstname, lastname, phoneNo, appointmentDate } = req.body;
    if (!firstname || !lastname || !phoneNo || !appointmentDate) {
      return res
        .status(401)
        .json({ success: false, msg: "Pls provide the necessary info" });
    }

    const appointment = await Appointment.create(req.body);
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({
      success: true,
      noOfApt: appointments.length,
      data: appointments,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// const getAppointment = async (req, res) => {
//   try {
//     const { appointmentId } = req.params;

//     const appointment = await Appointment.findById({ _id: appointmentId });
//     if (!appointment) {
//       return res
//         .status(401)
//         .json({ msg: "This appointment id can't be found" });
//     }

//     res.status(200).json({ success: true, data: appointment });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// };

// const deleteAppointment = async (req, res) => {
//   try {
//     const { appointmentId } = req.params;
//     const delAppointment = await Appointment.findByIdAndDelete({
//       _id: appointmentId,
//     });

//     if (!delAppointment) {
//       return res
//         .status(400)
//         .json({ msg: "Pls provide valid id to delete appointment" });
//     }

//     res.status(200).json({ msg: "Appointment Deleted", data: delAppointment });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// };

module.exports = {
  createAppointment,
  getAppointments,
};
