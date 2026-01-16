// Requerimiento 1.1: Usuarios quemados
const USERS = [
    { username: 'admin', password: '1234' },
    { username: 'jose', password: 'password123' }
];

// Controlador para procesar el Login
export const loginUser = (req, res) => {
    const { username, password } = req.body;

    const user = USERS.find(u => u.username === username && u.password === password);

    if (user) {
        /**
         * CAMBIO CLAVE: Redirigimos a '/inicio' en lugar de '/'.
         * Esto es porque ahora '/' redirige al login, y si lo dejamos en '/' 
         * entraríamos en un bucle infinito de redirecciones.
         */
        res.redirect('/inicio');
    } else {
        // Si falla, volvemos a renderizar la vista de login con el mensaje de error
        res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
};

/**
 * Controlador para mostrar el Dashboard (Index)
 * Aquí es donde se ve el balanceo de carga.
 */
export const getInicio = (req, res) => {
    res.render('index', { 
        // Esta variable vendrá del Dockerfile o docker-compose de cada nodo
        nodeName: process.env.NODE_NAME || 'Servidor Local (Desarrollo)',
        error: null
    });
};