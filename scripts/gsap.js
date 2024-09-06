export function gsapEffect(){
    const d = document;

    const titulo = d.querySelector('h1');

    
    gsap.from(
        titulo, {
            duration:2,
            x: -100,
            opacity: 0,
        });
  
}
