import app from "./app.js";
import connectDatabase from "./databases/connection.js";

const PORT = process.env.PORT || 3001;

async function startServer() {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}

startServer();