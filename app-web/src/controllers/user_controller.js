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
        res.redirect('/inicio');
    } else {
        // Si falla, volvemos a renderizar la vista de login con el mensaje de error
        res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
};

export const getInicio = (req, res) => {
    res.render('index', { 
        nodeName: process.env.NODE_NAME || 'Servidor Local (Desarrollo)',
        error: null
    });
};