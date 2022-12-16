"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const palavras_json_1 = __importDefault(require("../content/palavras.json"));
const util_1 = __importDefault(require("../util/util"));
class palavrasController {
    constructor() {
        this.roteador = express.Router();
        this.rota = "palavra";
        this.roteador.get(`/${this.rota}`, this.buscarPalavra);
    }
    buscarPalavra(request, response) {
        let util = new util_1.default();
        let palavras = palavras_json_1.default.Palavras;
        let inicial = request.query.inicial;
        let letras = request.query.letras;
        let palavra = '';
        if (inicial && util.letraValida(String(inicial))) {
            palavras = palavras.filter(p => p.toLocaleLowerCase().startsWith(String(inicial).toLocaleLowerCase()));
        }
        if (letras && util.numeroValido(String(letras))) {
            palavras = palavras.filter(p => p.length == Number(letras));
        }
        if (palavras.length > 0) {
            palavra = palavras[Math.floor(Math.random() * palavras.length)];
            palavra = util.formatarPalavra(palavra);
        }
        response.send(palavra);
    }
}
exports.default = palavrasController;
//# sourceMappingURL=palavrasController.js.map