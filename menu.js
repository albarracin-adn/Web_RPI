/* Definir constantes */
const ham = document.querySelector('.ham')
const enlaces = document.querySelector('.enlaces-menu')
const barras = document.querySelectorAll('.ham span')

/* Añadir evento de escucha para el click del botón
    se hace una función flecha cuando se hace click 
    que lo que hace es cambiar la clase de enlaces a activado.
    también se añade un una clase a todos los hijos del span
    la clase animado
*/ 
ham.addEventListener('click', ()=> {
    enlaces.classList.toggle('activado')
    barras.forEach(child => {child.classList.toggle('animado')})
})