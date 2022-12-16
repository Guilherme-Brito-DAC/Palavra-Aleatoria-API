import { Router } from 'express';

interface BaseController {
    rota: string;
    roteador: Router;
}

export default BaseController;