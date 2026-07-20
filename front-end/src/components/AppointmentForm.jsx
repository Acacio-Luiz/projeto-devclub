import { useState } from "react";
import "./AppointmentForm.css";
import api from "../services/api";

function AppointmentForm({ onAppointmentCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "Corte Masculino",
    barber: "Carlos",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/appointments", formData);

      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "",
        service: "Corte Masculino",
        barber: "Carlos",
      });

      if (onAppointmentCreated) {
        onAppointmentCreated();
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar agendamento.");
    }
  }

  return (
    <section className="appointment-form">
      <h2>Novo Agendamento</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome do cliente"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <div className="row">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="Corte Masculino">Corte Masculino</option>
          <option value="Barba">Barba</option>
          <option value="Corte + Barba">Corte + Barba</option>
          <option value="Sobrancelha">Sobrancelha</option>
        </select>

        <select
          name="barber"
          value={formData.barber}
          onChange={handleChange}
        >
          <option value="Carlos">Carlos</option>
          <option value="João">João</option>
          <option value="Marcos">Marcos</option>
          <option value="Fernando">Fernando</option>
        </select>

        <button type="submit">
          Agendar Horário
        </button>
      </form>
    </section>
  );
}

export default AppointmentForm;