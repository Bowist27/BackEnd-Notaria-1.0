// Configuracion especifica de CORS

// Se puede hacer mas archivos de este estilo,
// Ejemplo para configuracion de bases de datos

const cors = require("cors");

const corsOptions = {
  origin: "*", // Permitir acceso desde cualquier origen
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

module.exports = cors(corsOptions);
