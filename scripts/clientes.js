
export function opClientes() {
    const d = document;
    const sectionCards = d.querySelector('.res__container');
    
    const clientes = [
        {
            imagen: '../img/perfil/res_mujer.png',
            nombre: 'Laura',
            apellido: 'Gonzalez',
            fecha: '12/1/2023',
            res: 'Un lugar acogedor con el mejor café de Bariloche. La atención es excelente y el ambiente inigualable.',
        },
    
        {
            imagen: '../img/perfil/res_hombre.png',
            nombre: ' Carlos',
            apellido: 'Muslera',
            fecha: '18/7/2022',
            res: 'Cada visita a Briolette Café es una experiencia encantadora. El café es delicioso y el servicio impecable.',
        },
    
        {
            imagen: '../img/perfil/res_mujer_mayor.png',
            nombre: 'Ana',
            apellido: 'Rojas',
            fecha: '23/9/2024',
            res: 'El ambiente es perfecto para relajarse. Los postres son un verdadero deleite. Altamente recomendado.',
        },
    
        {
            imagen: '../img/perfil/res_joven.png',
            nombre: 'Juan',
            apellido: 'Torrilla',
            fecha: '30/12/2023',
            res: 'Briolette Café ofrece un café de primera calidad y un ambiente sofisticado. Ideal para una pausa durante el día.',
        },
    
        {
            imagen: '../img/perfil/res_joven_fem.png',
            nombre: 'Sofia',
            apellido: 'Larsen',
            fecha: '1/10/2022',
            res: 'Un rincón especial en Bariloche con una atmósfera cálida y un café exquisito. No te lo puedes perder.',
        },
    
    ];
    
    clientes.forEach(cliente =>{
        sectionCards.innerHTML += `
        
        <div id="card">
                <!--Parte superior de la card-->
                <div class="card__superior">
                    <img src="${cliente.imagen}" alt="" class="perfil__res">
                    <p class="nombe__res">${cliente.apellido} ${cliente.nombre}</p>
                    <p class="fecha__res">${cliente.fecha}</p> 
                </div>
                <!--estrellas-->
                <div class="estrellas__cont">
                    <img src="./img/estrella/estrella.svg" alt="estrella" class="estrella">
                    <img src="./img/estrella/estrella.svg" alt="estrella" class="estrella">
                    <img src="./img/estrella/estrella.svg" alt="estrella" class="estrella">
                    <img src="./img/estrella/estrella.svg" alt="estrella" class="estrella">
                    <img src="./img/estrella/estrella.svg" alt="estrella" class="estrella">
                </div>
                <!--Parte inferio-->
                <div class="opinion__cont">
                    <p class="op">${cliente.res}</p>
                </div>
            </div>
    
        `;
    })  
}



