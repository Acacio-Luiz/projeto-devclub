import "./Sidebar.css";
import logo from "../assets/logo1.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo DevClub Barber" className="avatar" />

        <h1>
          DevClub<span>Barber</span>
        </h1>
      </div>

      <nav className="menu">
        <a href="#" className="active">
          📊 Dashboard
        </a>

        <a href="#">
          📅 Agendamentos
        </a>

        <a href="#">
          👤 Clientes
        </a>

        <a href="#">
          ✂️ Barbeiros
        </a>

        <a href="#">
          ⚙️ Configurações
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;