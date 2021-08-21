const pratos = document.querySelectorAll('.pratos');
const telaPratos = document.querySelectorAll('.tela-pratos');
const closeTela = document.querySelectorAll('.x-icon-close');
const addButon = document.querySelectorAll('.addPedido');

for(let i = 0; i <= telaPratos.length; i++) {
    pratos[i].addEventListener('click', () => {
        if(telaPratos[i].style.display === 'none') {
            telaPratos[i].style.display = 'block';
        };
    });
    closeTela[i].addEventListener('click', () => {
        if(telaPratos[i].style.display === 'block') {
            telaPratos[i].style.display = 'none';
        }
    });
    addButon[i].addEventListener('click', () => {
        if(telaPratos[i].style.display === 'block') {
            telaPratos[i].style.display = 'none';
        };
    });
};
