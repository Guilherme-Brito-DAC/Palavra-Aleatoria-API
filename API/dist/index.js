"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const palavrasController_1 = __importDefault(require("./controllers/palavrasController"));
dotenv_1.default.config();
const porta = 5000;
const controladores = [
    new palavrasController_1.default()
];
const servidor = new app_1.default(controladores, porta);
servidor.iniciar();
//# sourceMappingURL=index.js.map