"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Servidor {
    constructor(controllers, porta) {
        this.app = (0, express_1.default)();
        this.port = porta;
        controllers.forEach((controller) => {
            this.app.use('/', controller.roteador);
        });
    }
    iniciar() {
        this.app.listen(this.port, () => {
            console.log(`⚡ Servidor rodando http://localhost:${this.port}⚡`);
        });
    }
}
exports.default = Servidor;
//# sourceMappingURL=app.js.map