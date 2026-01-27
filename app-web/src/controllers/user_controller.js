const USERS = [
    { username: 'admin', password: '1234' },
    { username: 'jose', password: 'password123' }
];

export const loginUser = (req, res) => {
    const { username, password } = req.body;

    const user = USERS.find(u => u.username === username && u.password === password);

    if (user) {
        res.redirect('/inicio');
    } else {
        res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
};

export const getInicio = (req, res) => {
    res.render('index', { 
        nodeName: process.env.NODE_NAME || 'Servidor Local (Desarrollo)',
        error: null
    });
};