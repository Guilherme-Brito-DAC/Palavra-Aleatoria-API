import express from "express";

class Servidor {
    public app: express.Application;
    public port: number;

    constructor(controllers: any[], porta: number) {
        this.app = express();
        this.port = porta;

        controllers.forEach((controller) => {
            this.app.use('/', controller.roteador);
        });
    }

    public iniciar(): void {
        this.app.listen(this.port, () => {
            console.log(`⚡ Servidor rodando http://localhost:${this.port}⚡`);
        });
    }
}

export default Servidor;