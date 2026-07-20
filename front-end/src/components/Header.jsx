import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-info">
        <h1>Dashboard</h1>
        <p>Bem-vindo ao sistema de gerenciamento da DevClub Barber.</p>
      </div>

      <div className="header-user">

       <div className="admin-avatar">
  💈
</div>

        <div> 
          <strong>Administrador</strong>
          <span>DevClubBarber</span>
        </div>

      </div>

    </header>
  );
}

export default Header;