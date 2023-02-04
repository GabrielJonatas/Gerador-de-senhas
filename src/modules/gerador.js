import embaralhador from './embaralhador'

export default class gerador {
    constructor () {
        this.gerar = document.querySelector('#gerar-senha');
        this.caracteres = document.querySelector('#quantidade-caracteres');
        this.eventos();
    }

    eventos() {
        this.gerar.addEventListener('click' , e => {
            return this.gera(e);
        });
    }

    gera(e) {
        e.preventDefault();
        const container = document.querySelector('.container');
        const senhaGerada = document.querySelector('#senha-gerada');
        let array = [];

        if(this.caracteres.value == '0') return senhaGerada.innerHTML = 'Quantidade de caracteres inválido';
        if(Number(this.caracteres.value) > 25) return senhaGerada.innerHTML = 'Quantidade de caracteres inválido';

        for(let campo of container.querySelectorAll('.checkbox')) {
            if(campo.checked) {
                array.push(campo.value);
            } 
        }

        if(array.length == 0) return senhaGerada.innerHTML = 'Nada selecionado';

        return senhaGerada.innerHTML = this.senha(array);
    }

    senha(array) {
        const opcoes = ['0123456789','ABCDEFGHIJKLMENOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz','!@#$%&*+-|?°£{}[]'];
        let novoArray = array.map(valor => opcoes[Number(valor)]);
        return embaralhador.randomizador(novoArray, this.caracteres.value);
    }
}