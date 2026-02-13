// Configuración de las 12 referencias (capturas de pantalla)
// CON RESÚMENES DEBajo DE CADA IMAGEN
const referenciasImagenes = [
    { 
        id: 1, 
        archivo: 'recomendacion1.png', 
        nombre: 'Alejandro C.', 
        mensaje: 'Excelente método, aprendí mucho en poco tiempo. Clases muy dinámicas.'
    },
    { 
        id: 2, 
        archivo: 'recomendacion2.png', 
        nombre: 'Armando C.', 
        mensaje: 'Por fin puedo mantener conversaciones en inglés. Muy recomendable.'
    },
    { 
        id: 3, 
        archivo: 'recomendacion3.png', 
        nombre: 'Eduardo R.', 
        mensaje: 'Las clases se adaptan perfectamente a mi horario.'
    },
    { 
        id: 4, 
        archivo: 'recomendacion4.png', 
        nombre: 'Gabriela C.', 
        mensaje: 'Aprobé mi certificación gracias a las clases. 100% recomendado.'
    },
    { 
        id: 5, 
        archivo: 'recomendacion5.png', 
        nombre: 'Jessica L.', 
        mensaje: 'Aprender inglés mientras platicamos hace que sea muy fácil y divertido.'
    },
    { 
        id: 6, 
        archivo: 'recomendacion6.png', 
        nombre: 'Laura G.', 
        mensaje: 'Excelente profesora, explica muy claro y se preocupa por tu progreso.'
    },
    { 
        id: 7, 
        archivo: 'recomendacion7.png', 
        nombre: 'Amairani.', 
        mensaje: 'Mejoré mi inglés para el trabajo en solo 3 meses.'
    },
    { 
        id: 8, 
        archivo: 'recomendacion8.png', 
        nombre: 'Montserrat M.', 
        mensaje: 'Las clases por Discord son muy cómodas y efectivas.'
    },
    { 
        id: 9, 
        archivo: 'recomendacion9.png', 
        nombre: 'Natalie C.', 
        mensaje: 'Euridice tiene mucha paciencia y sabe cómo motivarte.'
    },
    { 
        id: 10, 
        archivo: 'recomendacion10.png', 
        nombre: 'Sebastián G.', 
        mensaje: 'Por fin entiendo la gramática inglesa. Su método es único.'
    },
    { 
        id: 11, 
        archivo: 'recomendacion11.png', 
        nombre: 'Dulce L.', 
        mensaje: 'Hablar desde el primer día es lo mejor. Se pierde el miedo rápidamente.'
    },
    { 
        id: 12, 
        archivo: 'recomendacion12.png', 
        nombre: 'Aidée M.', 
        mensaje: 'Clases muy personalizadas y se ajustan a tus necesidades.'
    }
];

// Función para cargar las referencias
function cargarReferencias() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) return;
    
    let html = '';
    
    // Agregar las 12 referencias de imágenes CON sus resúmenes debajo
    referenciasImagenes.forEach(ref => {
        html += `
            <div class="reference-item">
                <div class="reference-image">
                    <img src="assets/${ref.archivo}" alt="Referencia de ${ref.nombre}">
                </div>
                <div class="reference-content">
                    <h4>${ref.nombre}</h4>
                    <p>"${ref.mensaje}"</p>
                </div>
            </div>
        `;
    });
    
    // Agregar referencias de usuarios guardadas en localStorage
    const userReferences = JSON.parse(localStorage.getItem('userReferences')) || [];
    userReferences.forEach(ref => {
        html += `
            <div class="reference-item user-reference">
                <div class="reference-content">
                    <h4>${ref.nombre}</h4>
                    <p>"${ref.mensaje}"</p>
                    <small style="color: var(--gray); display: block; margin-top: 10px;">${ref.fecha}</small>
                </div>
            </div>
        `;
    });
    
    galleryContainer.innerHTML = html;
    
    // Re-aplicar animaciones a los nuevos elementos
    setTimeout(() => {
        document.querySelectorAll('.reference-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(el);
        });
    }, 100);
}

// Función para inicializar las referencias
function initReferencias() {
    cargarReferencias();
}

// Cargar referencias cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initReferencias);