import { Router } from 'express';
import { loginUser, getInicio } from '../controllers/user_controller.js';
import { getSalasPage, postCrearSala } from '../controllers/sala_controller.js';

const router = Router();

router.get('/', (req, res) => res.redirect('/login'));
router.get('/login', (req, res) => res.render('login', { error: null }));
router.post('/login', loginUser);

router.get('/inicio', getInicio);
router.get('/salas', getSalasPage);
router.post('/salas/registro', postCrearSala);

export default router;