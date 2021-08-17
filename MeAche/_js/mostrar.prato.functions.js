const pratos = document.querySelectorAll('.pratos');
const telaPratos = document.querySelectorAll('.tela-pratos');
const closeTela = document.querySelectorAll('.close-tela');

for(let i = 0; i <= telaPratos.length; i++) {
    pratos[i].addEventListener('click', () => {
        if(telaPratos[i].style.display === 'none') {
            telaPratos[i].style.display = 'block';
        } else {
            telaPratos[i].style.display = 'none';
        }

        closeTela[i].addEventListener('click', () => {
            if(telaPratos[i].style.display === 'block') {
                telaPratos[i].style.display = 'none';
            }
        });
    });
};
