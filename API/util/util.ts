class Util {
    public letraValida(letra: string) {
        return letra.length === 1 && letra.match(/[a-z]/i);
    }

    public numeroValido(letras: string): boolean {
        return !isNaN(Number(letras));
    }

    public formatarPalavra(palavra: string) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLocaleLowerCase();
    }
}

export default Util