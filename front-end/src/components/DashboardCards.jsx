import "./DashboardCards.css";

function DashboardCards({ appointments = [] }) {
  const confirmed = appointments.filter(
    (item) => item.status === "confirmado"
  ).length;

  const cards = [
    {
      title: "Agendamentos",
      value: appointments.length,
      icon: "📅",
    },
    {
      title: "Confirmados",
      value: confirmed,
      icon: "✅",
    },
    {
      title: "Barbeiros",
      value: 4,
      icon: "✂️",
    },
    {
      title: "Faturamento",
      value: "R$ 8.420",
      icon: "💰",
    },
  ];

  return (
    <section className="cards">
      {cards.map((card) => (
        <div className="card" key={card.title}>
          <div className="card-icon">
            {card.icon}
          </div>

          <div className="card-info">
            <span>{card.title}</span>
            <strong>{card.value}</strong>
          </div>
        </div>
      ))}
    </section>
  );
}

export default DashboardCards;