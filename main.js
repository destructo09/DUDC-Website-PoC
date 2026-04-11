// --- Mobile Menu Toggle ---
document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                toggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // --- Scroll Fade-In Animation ---
    var faders = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        faders.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything immediately
        faders.forEach(function (el) {
            el.classList.add('visible');
        });
    }
});

// --- Lightbox (Gallery page) ---
function openLightbox(item) {
    var img = item.querySelector('img');
    var caption = item.querySelector('.caption');
    var lightbox = document.getElementById('lightbox');
    var lbImg = document.getElementById('lightbox-img');
    var lbCaption = document.getElementById('lightbox-caption');

    if (!lightbox || !img) return;

    // Use higher resolution version
    lbImg.src = img.src.replace('w=600', 'w=1400');
    lbImg.alt = img.alt;
    lbCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
    // Only close if clicking the backdrop or close button, not the image
    if (e.target.tagName === 'IMG') return;
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close lightbox on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        var lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});
