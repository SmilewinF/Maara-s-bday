// Landing Page
const launchBtn = document.getElementById('launchBtn');

if (launchBtn) {
    launchBtn.addEventListener('click', () => {
        // Navigate to celebration page
        window.location.href = 'celebration.html';
    });
}

// Celebration Page
const birthdayPopup = document.getElementById('birthdayPopup');
const closeBtn = document.getElementById('closeBtn');

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        birthdayPopup.classList.add('hidden');
    });
}

// Show popup after animation completes
if (birthdayPopup) {
    setTimeout(() => {
        birthdayPopup.classList.remove('hidden');
    }, 4000);
}

// Create confetti effect
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    if (!confettiContainer) return;

    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.width = Math.random() * 8 + 4 + 'px';
        confettiPiece.style.height = confettiPiece.style.width;
        confettiPiece.style.background = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'][Math.floor(Math.random() * 5)];
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.top = '-10px';
        confettiPiece.style.borderRadius = '50%';
        confettiPiece.style.pointerEvents = 'none';

        confettiContainer.appendChild(confettiPiece);

        // Animate confetti falling
        const duration = Math.random() * 3 + 2;
        const xOffset = (Math.random() - 0.5) * 200;
        
        confettiPiece.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) translateX(${xOffset}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
    }
}

// Trigger confetti when popup appears
if (birthdayPopup) {
    setTimeout(() => {
        createConfetti();
    }, 4000);
}

// Add some interactivity to landing page stars
const constellationOverlay = document.querySelector('.constellation-overlay');
if (constellationOverlay) {
    const stars = constellationOverlay.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.transition = 'all 0.3s ease';
        star.addEventListener('mouseenter', () => {
            star.style.fill = '#ffff00';
            star.style.r = star.getAttribute('r') * 2;
        });
        star.addEventListener('mouseleave', () => {
            star.style.fill = 'white';
            star.style.r = star.getAttribute('r') / 2;
        });
    });
}
