export default {
    get() {
        this.btnMenos = document.querySelectorAll('.menos');
        this.btnMais = document.querySelectorAll('.mais');
        this.quantPedido = document.querySelectorAll('.quantPedido');
        this.sendPedido = document.querySelector('#sendPedido');
        
        this.pratos = document.querySelectorAll('.pratos');
        this.nomePrato = document.querySelectorAll('.name-prato');
        this.telaPratos = document.querySelectorAll('.tela-pratos');
        this.closeTela = document.querySelectorAll('.x-icon-close');
        this.addButon = document.querySelectorAll('.addPedido');
        this.subtotalVazio = document.querySelector('#pedido-vazio');
        this.tabela = document.querySelector('#tbCreate');
    },
    actions() {
        this.sendPedido.onclick = () => this.sendPedidoData();
    }
}
