import { useEffect, useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";

import api from "./services/api";

function App() {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    try {
      const { data } = await api.get("/appointments");
      setAppointments(data);
    } catch (error) {
      console.log("Erro ao carregar agendamentos:", error);
    }
  }

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Header />

        <DashboardCards appointments={appointments} />


        <div className="content-grid">
          <AppointmentForm onAppointmentCreated={loadAppointments} />

          <AppointmentList
            appointments={appointments}
            onAppointmentUpdated={loadAppointments}
          />
        </div>
      </div>
    </div>
  );
}

export default App;