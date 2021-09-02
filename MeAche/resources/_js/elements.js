export default {
    get() {
        this.btnMenos = document.querySelectorAll('.menos');
        this.btnMais = document.querySelectorAll('.mais');
        this.quantPedido = document.querySelectorAll('.quantPedido');
        this.sendPedido = document.querySelector('#sendPedido');

        this.subtotal = document.querySelector('#subtotal');
        this.descSubtotal = document.querySelector('#span-subtotal');
        this.closeSubtotal = document.querySelectorAll('.close-subtotal');
        
        this.descPratos = document.querySelectorAll('.desc-pratos');
        this.descClose = document.querySelectorAll('.desc-close');
        this.liPratos = document.querySelectorAll('.pratos');        
        this.addPedido = document.querySelectorAll('.addPedido');        
        this.nomePrato = document.querySelectorAll('.name-prato');    

        this.tabela = document.querySelector('#main-table');

        this.carrinhoVazio = document.querySelector('#pedido-vazio');
        this.pedidoFeito = document.querySelector('#pedido-feito');
        this.nadaSelecionado = document.querySelector('#nada-selecionado');

        this.arrowUp = document.querySelectorAll('.arrowUp');
        this.arrowDown = document.querySelectorAll('.arrowDown');
        this.collapseMenu = document.querySelectorAll(".collapseMenu");
    },
    actions() {
        this.sendPedido.onclick = () => this.verificaPedido();             
        
        for(let i = 0; i < this.descPratos.length; i++) {
            this.liPratos[i].onclick = () => this.showDisplay(this.descPratos[i]);            
            this.descClose[i].onclick = () => this.showDisplay(this.descPratos[i]);
            this.addPedido[i].onclick = () => this.showDisplay(this.descPratos[i]);            
        }
        //arrows animations
        for(let i = 0; i < this.collapseMenu.length; i++) {
            this.collapseMenu[i].onclick = () => this.showDisplay(this.collapseMenu[i], this.arrowUp[i], this.arrowDown[i]);
        }
        //subtotal show/hidden
        this.subtotal.onclick = () => this.showDisplay(this.descSubtotal); 
        for(let i = 0; i < this.closeSubtotal.length; i++) {
            this.closeSubtotal[i].onclick = () => this.showDisplay(this.descSubtotal);
        }                     
    }
}
