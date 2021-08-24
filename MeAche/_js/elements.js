

export default {
    get() {
        this.btnMenos = document.querySelectorAll('.menos');
        this.btnMais = document.querySelectorAll('.mais');
        this.quantPedido = document.querySelectorAll('.quantPedido');
        
        this.pratos = document.querySelectorAll('.pratos');
        this.telaPratos = document.querySelectorAll('.tela-pratos');
        this.closeTela = document.querySelectorAll('.x-icon-close');
        this.addButon = document.querySelectorAll('.addPedido');
        this.nomePrato = document.querySelectorAll('.prt');
        this.subtotalVazio = document.querySelector('#pedido-vazio');
        this.tabela = document.querySelector('#tbCreate');
    },
}