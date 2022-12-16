import * as express from 'express';
import BaseController from '../interface/baseController'
import PalavrasJSON from '../content/palavras.json';
import Util from '../util/util'

class palavrasController implements BaseController {
    roteador: express.Router = express.Router();
    rota: string = "palavra";

    constructor() {
        this.roteador.get(`/${this.rota}`, this.buscarPalavra);
    }

    buscarPalavra(request: express.Request, response: express.Response) {
        let util = new Util();
        let palavras = PalavrasJSON.Palavras
        let inicial = request.query.inicial
        let letras = request.query.letras

        let palavra: string = ''

        if (inicial && util.letraValida(String(inicial))) {
            palavras = palavras.filter(p => p.toLocaleLowerCase().startsWith(String(inicial).toLocaleLowerCase()))
        }

        if (letras && util.numeroValido(String(letras))) {
            palavras = palavras.filter(p => p.length == Number(letras))
        }

        if (palavras.length > 0) {
            palavra = palavras[Math.floor(Math.random() * palavras.length)]
            palavra = util.formatarPalavra(palavra)
        }

        response.send(palavra);
    }
}

export default palavrasController;