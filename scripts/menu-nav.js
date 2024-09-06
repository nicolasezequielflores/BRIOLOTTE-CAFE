export function toggleMenu(){
    const d = document;
    const nav = d.querySelector('.nav');
    const menu = d.querySelector('.btn__menu');
    const salir = d.querySelector('.salir');

    menu.addEventListener('click', () =>{
    nav.classList.toggle('nav__abierto');
    });

    salir.addEventListener('click', () =>{
    nav.classList.toggle('nav__abierto');
    });
}