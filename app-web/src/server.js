import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
// 1. Importamos las rutas (Recuerda la extensión .js)
import appRoutes from "./routers/app_routes.js"; 

const app = express();
dotenv.config();

// Configuración para manejar rutas de archivos en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// --- MIDDLEWARES ---
app.use(express.json());
// 2. IMPORTANTE: Middleware para procesar formularios HTML (POST)
app.use(express.urlencoded({ extended: true }));
// Middleware para archivos estáticos (CSS, imágenes)
app.use(express.static(path.join(__dirname, '../public')));

// --- RUTAS ---
// 3. Conectamos el archivo de rutas
app.use(appRoutes);

// Manejo de errores 404 (Siempre al final)
app.use((req, res) => {
    res.status(404).render('404'); // O res.status(404).send("No encontrado")
});

export default app;