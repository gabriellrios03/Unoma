document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.getElementById('dropdownButton');
    var dropdownMenu = document.getElementById('dropdownMenu');

    // Maneja el clic en el botón del menú desplegable
    dropdownButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    // Maneja el clic fuera del menú desplegable para cerrarlo
    window.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target) && !dropdownButton.contains(e.target)) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // Maneja los submenús
    var submenus = document.querySelectorAll('.dropdown-submenu');
    submenus.forEach(function(submenu) {
        submenu.addEventListener('mouseenter', function() {
            var submenuDropdown = this.querySelector('.dropdown-menu');
            submenuDropdown.classList.remove('hidden');
            submenuDropdown.style.top = '0';
            submenuDropdown.style.left = '100%';
        });

        submenu.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-menu').classList.add('hidden');
        });
    });
});

