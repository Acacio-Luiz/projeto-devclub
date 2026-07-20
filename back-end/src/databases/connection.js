import mongoose from "mongoose";

let isConnected = false;

async function connectDatabase() {
  if (isConnected) {
    return;
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    isConnected = connection.connections[0].readyState === 1;

    console.log("✅ MongoDB conectado com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar no MongoDB:", error);
    throw error;
  }
}

export default connectDatabase;