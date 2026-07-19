const weddingDate = new Date('2026-07-31T20:00:00+03:00');

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
  document.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      }),
      { threshold: 0.12 }
    ).observe(el);
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);
initReveal();
