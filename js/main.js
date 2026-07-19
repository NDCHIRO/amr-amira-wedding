const weddingDate = new Date('2026-07-31T20:00:00+03:00');
const AUTO_OPEN_MS = 2000;

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  const els = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
  };

  if (!els.days) return;

  if (diff <= 0) {
    Object.values(els).forEach(el => (el.textContent = '0'));
    return;
  }

  els.days.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  els.hours.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  els.minutes.textContent = Math.floor((diff / (1000 * 60)) % 60);
  els.seconds.textContent = Math.floor((diff / 1000) % 60);
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach(el => observer.observe(el));
}

function initEnvelope() {
  const intro = document.getElementById('envelopeIntro');
  const envelope = document.getElementById('envelope');
  const progressBar = document.getElementById('openProgress');
  if (!intro || !envelope) return;

  let opened = false;
  let autoTimer = null;

  if (progressBar) {
    progressBar.classList.add('animate');
  }

  function openInvitation() {
    if (opened) return;
    opened = true;

    if (autoTimer) clearTimeout(autoTimer);

    intro.classList.add('opening');
    envelope.classList.add('open');

    setTimeout(() => {
      intro.classList.add('revealing');
      document.body.classList.remove('intro-active');
      document.body.classList.add('intro-done');
    }, 1400);

    setTimeout(() => {
      intro.classList.add('done');
    }, 2400);
  }

  intro.addEventListener('click', openInvitation);
  intro.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openInvitation();
    }
  });

  autoTimer = setTimeout(openInvitation, AUTO_OPEN_MS);
}

updateCountdown();
setInterval(updateCountdown, 1000);
initReveal();
initEnvelope();
