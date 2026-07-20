import { FaUser, FaPhone, FaClock, FaCalendarAlt, FaTrash } from "react-icons/fa";

function AppointmentCard({
  appointment,
  onDelete
}) {
  return (
    <div className="appointment-card">

      <div className="appointment-top">

        <h3>
          <FaUser />
          {appointment.name}
        </h3>

        <button
          className="delete-btn"
          onClick={() => onDelete(appointment.id)}
        >
          <FaTrash />
        </button>

      </div>

      <p>

        <FaPhone />

        {appointment.phone}

      </p>

      <p>

        <FaCalendarAlt />

        {appointment.date}

      </p>

      <p>

        <FaClock />

        {appointment.time}

      </p>

    </div>
  );
}

export default AppointmentCard;