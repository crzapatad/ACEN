function mostrarVentana(nombre, descripcion) {
    document.getElementById('nombrePersona').innerText = nombre;
    document.getElementById('descripcionPersona').innerText = descripcion;
    document.getElementById('ventanaModal').style.display = 'flex';
}

function cerrarVentana() {
    document.getElementById('ventanaModal').style.display = 'none';
}

/*-----*/
const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
