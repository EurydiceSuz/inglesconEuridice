// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Efecto de scroll en navegación
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'white';
    }
});

// Animación de elementos al hacer scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a tarjetas
document.querySelectorAll('.feature-card, .reference-item, .booking-step, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulario de referencias
const referenceForm = document.getElementById('referenceForm');
if (referenceForm) {
    referenceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('refName').value;
        const message = document.getElementById('refMessage').value;
        
        // Crear nueva referencia
        const newReference = {
            id: Date.now(),
            nombre: name,
            mensaje: message,
            fecha: new Date().toLocaleDateString('es-MX')
        };
        
        // Guardar en localStorage
        let userReferences = JSON.parse(localStorage.getItem('userReferences')) || [];
        userReferences.unshift(newReference);
        localStorage.setItem('userReferences', JSON.stringify(userReferences));
        
        // Limpiar formulario
        this.reset();
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por compartir tu experiencia! Tu referencia ha sido publicada.');
        
        // Actualizar galería de referencias
        if (typeof cargarReferencias === 'function') {
            cargarReferencias();
        }
    });
}