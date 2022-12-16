import dotenv from 'dotenv';
import Servidor from './app'
import palavrasController from './controllers/palavrasController';

dotenv.config();

const porta: number = 5000;
const controladores = [
    new palavrasController()
]

const servidor = new Servidor(controladores, porta);

servidor.iniciar();