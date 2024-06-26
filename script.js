// script.js - Archivo de JavaScript personalizado

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento listo!');

    // Ejemplo de funcionalidad adicional: cambiar el color de fondo de la navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-light');
        } else {
            navbar.classList.remove('bg-light');
        }
    });

    // Manejo de submenús
    const dropdowns = document.querySelectorAll('.dropdown-submenu');
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', () => {
            const submenu = dropdown.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'block';
        });

        dropdown.addEventListener('mouseout', () => {
            const submenu = dropdown.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'none';
        });
    });
});
