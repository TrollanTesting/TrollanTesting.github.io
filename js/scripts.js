

document.getElementById('lang-en').addEventListener('click', function(event) {
    event.preventDefault();
    // Redirigir a la versión en inglés
    window.location.href = 'index.html';
});

document.getElementById('lang-es').addEventListener('click', function(event) {
    event.preventDefault();
    // Redirigir a la versión en español
    window.location.href = 'indexEs.html';
});

const header = document.querySelector('header');

    // Función para agregar o quitar la clase 'header-compact' al hacer scroll
    window.onscroll = function() {
        if (window.scrollY > 50) { // Si el desplazamiento es mayor a 50px
            header.classList.add('header-compact');
        } else {
            header.classList.remove('header-compact');
        }
    };

    const serviceButtons = document.querySelectorAll('.service-btn');

    // Agregar evento de clic a cada botón
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Alternar la clase 'open' en el item de servicio
            const serviceItem = this.closest('.service-item');
            serviceItem.classList.toggle('open');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            // Obtén la altura del header (en este caso, 80px, pero ajusta si es diferente)
            var headerHeight = document.querySelector('header').offsetHeight;
    
            window.scrollTo({
                top: document.querySelector(this.getAttribute('href')).offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
    
    // Obtener el checkbox y el estado del tema almacenado
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Si hay un tema guardado, aplicarlo
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true; // Activar el switch si es tema oscuro
} else {
    document.body.classList.remove('dark-theme');
    themeToggle.checked = false; // Desactivar el switch si es tema claro
}

// Cambiar entre tema claro y oscuro al hacer clic en el switch
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Guardar la preferencia
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light'); // Guardar la preferencia
    }
});



    