"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    letraValida(letra) {
        return letra.length === 1 && letra.match(/[a-z]/i);
    }
    numeroValido(letras) {
        return !isNaN(Number(letras));
    }
    formatarPalavra(palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLocaleLowerCase();
    }
}
exports.default = Util;
//# sourceMappingURL=util.js.map