import "./AppointmentList.css";
import api from "../services/api";

function AppointmentList({
  appointments = [],
  onAppointmentUpdated,
}) {
  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Deseja realmente excluir este agendamento?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/appointments/${id}`);

      if (onAppointmentUpdated) {
        onAppointmentUpdated();
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao excluir agendamento.");
    }
  }

  return (
    <section className="appointment-list">
      <div className="list-header">
        <h2>Agendamentos</h2>
      </div>

      {appointments.length === 0 ? (
        <div className="empty">
          Nenhum agendamento encontrado.
        </div>
      ) : (
        appointments.map((appointment) => (
          <div
            className="appointment-card"
            key={appointment._id}
          >
            <div className="appointment-info">
              <h3>{appointment.name}</h3>

              <p>📞 {appointment.phone}</p>

              <p>
                📅 {appointment.date} às {appointment.time}
              </p>

              <p>✂️ {appointment.service}</p>

              <p>👨‍💼 {appointment.barber}</p>
            </div>

            <button
              className="delete"
              onClick={() => handleDelete(appointment._id)}
            >
              Excluir
            </button>
          </div>
        ))
      )}
    </section>
  );
}

export default AppointmentList;