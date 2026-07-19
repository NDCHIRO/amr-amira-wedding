function initIntroAnimation() {
  const petals = document.getElementById('introPetals');
  const confetti = document.getElementById('introConfetti');

  if (petals) {
    const icons = ['🌸', '✿', '💮', '·'];
    for (let i = 0; i < 10; i++) {
      const el = document.createElement('span');
      el.className = 'intro-petal';
      el.textContent = icons[i % icons.length];
      el.style.cssText = `
        left:${Math.random() * 100}%;
        font-size:${12 + Math.random() * 14}px;
        animation-duration:${8 + Math.random() * 12}s;
        animation-delay:${Math.random() * 8}s;
      `;
      petals.appendChild(el);
    }
  }

  if (confetti) {
    const colors = ['#f5c0c8', '#dbb860', '#e8b8b0', '#f0dfa0', '#ecc0cc'];
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('span');
      el.className = 'intro-confetti-piece';
      el.style.cssText = `
        left:${Math.random() * 100}%;
        background:${colors[i % colors.length]};
        animation-duration:${6 + Math.random() * 10}s;
        animation-delay:${Math.random() * 6}s;
        width:${6 + Math.random() * 6}px;
        height:${8 + Math.random() * 8}px;
      `;
      confetti.appendChild(el);
    }
  }
}

function initBackgroundAnimation() {
  initIntroAnimation();

  const particles = document.getElementById('bgParticles');
  const sparkles = document.getElementById('bgSparkles');
  const heroPetals = document.getElementById('heroPetals');

  if (particles) {
    for (let i = 0; i < 14; i++) {
      const p = document.createElement('span');
      p.className = `bg-particle ${i % 2 === 0 ? 'gold' : 'rose'}`;
      const size = 2 + Math.random() * 4;
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${10 + Math.random() * 14}s;
        animation-delay:${Math.random() * 12}s;
      `;
      particles.appendChild(p);
    }
  }

  if (sparkles) {
    for (let i = 0; i < 8; i++) {
      const s = document.createElement('span');
      s.className = 'bg-sparkle';
      s.textContent = '·';
      s.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        font-size:${6 + Math.random() * 8}px;
        animation-delay:${Math.random() * 4}s;
        animation-duration:${2 + Math.random() * 3}s;
      `;
      sparkles.appendChild(s);
    }
  }

  if (heroPetals) {
    const petals = ['🌸', '✿', '❀', '💮'];
    for (let i = 0; i < 10; i++) {
      const petal = document.createElement('span');
      petal.textContent = petals[i % petals.length];
      petal.style.cssText = `
        left:${5 + Math.random() * 90}%;
        font-size:${12 + Math.random() * 12}px;
        animation-duration:${12 + Math.random() * 14}s;
        animation-delay:${Math.random() * 8}s;
      `;
      heroPetals.appendChild(petal);
    }
  }

  const heroConfetti = document.getElementById('heroConfetti');
  if (heroConfetti) {
    const colors = ['#f5c0c8', '#dbb860', '#e8b8b0', '#f0dfa0', '#ecc0cc', '#fff5ee'];
    for (let i = 0; i < 14; i++) {
      const piece = document.createElement('span');
      piece.style.cssText = `
        left:${Math.random() * 100}%;
        background:${colors[i % colors.length]};
        animation-duration:${7 + Math.random() * 10}s;
        animation-delay:${Math.random() * 6}s;
        width:${5 + Math.random() * 7}px;
        height:${7 + Math.random() * 9}px;
      `;
      heroConfetti.appendChild(piece);
    }
  }

  const heroSparkles = document.getElementById('heroSparkles');
  if (heroSparkles) {
    for (let i = 0; i < 10; i++) {
      const sparkle = document.createElement('span');
      sparkle.textContent = '✦';
      sparkle.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        font-size:${8 + Math.random() * 10}px;
        animation-delay:${Math.random() * 4}s;
        animation-duration:${2.5 + Math.random() * 3}s;
      `;
      heroSparkles.appendChild(sparkle);
    }
  }
}

initBackgroundAnimation();
