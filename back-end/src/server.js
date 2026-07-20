import app from "./app.js";
import connectDatabase from "./databases/connection.js";

const PORT = 3001;

connectDatabase();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});