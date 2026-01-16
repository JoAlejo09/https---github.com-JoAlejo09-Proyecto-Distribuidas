import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargamos variables de entorno (útil para desarrollo local fuera de Docker)
dotenv.config();

const dbConfig = {
    // En Docker, host será 'base_datos' según tu compose
    host: process.env.DB_HOST || 'localhost', 
    user: process.env.DB_USER || 'root',
    // Ajustado para coincidir con DB_PASS del docker-compose
    password: process.env.DB_PASS || 'root_password', 
    database: process.env.DB_NAME || 'proyecto_salas',
    // El puerto interno de la red de Docker para MySQL es 3306
    port: 3306 
};

const getConnection = async () => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log(`Conexión exitosa al host: ${dbConfig.host}`);
        return connection;
    } catch (error) {
        console.error("Error de conexión a la base de datos");
        // Nota: en mysql2 el mensaje de error está en error.message (en inglés)
        console.error(`Detalle: ${error.message}`);
        throw error;
    }
};

export default getConnection;