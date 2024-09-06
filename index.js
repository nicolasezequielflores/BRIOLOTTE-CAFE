import { toggleMenu } from "./scripts/menu-nav.js";
import {opClientes} from "./scripts/clientes.js";
import {gsapEffect} from "./scripts/gsap.js";

document.addEventListener('DOMContentLoaded', () =>{
    toggleMenu();
    opClientes();
    gsapEffect();
});


