export default class embaralhador {
    constructor (array) {
        this.array = array;
    }

    static randomizador(array,caracter) {
        const caracteres = Number(caracter);
        let senha = '';
        for(let j=0; j<caracteres; j++) {
            let random = Math.round(Math.random()*embaralhador.sorteador(array));
            const arrayProvisorio = Array.from(array[random]);
            senha += arrayProvisorio[embaralhador.sorteador(arrayProvisorio)];
        }
        return senha;
    }

    static sorteador(array) {
        const range = (array.length)-1;
        let random = Math.round(Math.random()*range);
        return random;
    }
}