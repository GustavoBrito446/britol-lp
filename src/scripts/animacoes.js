import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// Segue o relógio mesmo com frames lentos (WebGL no celular): o texto nunca fica preso no meio do fade.
gsap.ticker.lagSmoothing(0);

// Tudo aqui é enfeite: sem JS, ou com "reduzir movimento" ligado, a página fica visível e estática.
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  const ease = 'expo.out';

  // Hero: o texto sobe em sequência e a foto "assenta" com um leve zoom-out.
  gsap.from('.hero-texto > :is(h1, p, .hero-cta)', { y: 32, opacity: 0, duration: 1.2, ease, stagger: 0.09, delay: 0.25 });
  gsap.from('.hero-foto', { scale: 1.08, duration: 2.2, ease: 'power3.out' });
  // Ao rolar, a foto desce mais devagar que a página (parallax).
  gsap.to('.hero-foto', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  // Títulos e textos de abertura de cada seção.
  gsap.utils.toArray('main section:not(.hero) h2, main section:not(.hero) .lead, .argumento-texto').forEach((el) => {
    gsap.from(el, {
      y: 40, opacity: 0, duration: 1.1, ease,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // Listas entram linha a linha.
  ['.troca > div', '.recibo-lista dl > div', '.pel-linha', '.faq details', '.seletor label'].forEach((sel) => {
    const items = gsap.utils.toArray(sel);
    if (!items.length) return;
    gsap.from(items, {
      y: 24, opacity: 0, duration: 0.9, ease, stagger: 0.08,
      scrollTrigger: { trigger: items[0], start: 'top 90%', once: true },
    });
  });

  // Foto do PPF: a moldura abre conforme a seção entra na tela.
  gsap.fromTo('.ppf .foto',
    { clipPath: 'inset(14% 10% 14% 10%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
      scrollTrigger: { trigger: '.ppf .foto', start: 'top 95%', end: 'top 35%', scrub: 0.6 },
    });

  // Fotos laterais com parallax dentro da própria moldura.
  ['.vidros-foto img', '.final-foto'].forEach((sel) => {
    const img = document.querySelector(sel);
    if (!img) return;
    gsap.fromTo(img, { yPercent: -6, scale: 1.12 }, {
      yPercent: 6, scale: 1.12, ease: 'none',
      scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // Escala PS4–PS12: as barras de LED acendem da menor para a maior.
  gsap.from('.escala-barras span', {
    scaleY: 0, opacity: 0, transformOrigin: 'bottom', duration: 0.7, ease: 'power3.out', stagger: 0.07,
    scrollTrigger: { trigger: '.escala', start: 'top 85%', once: true },
  });

  // Carrossel e CTA final.
  gsap.from('.carrossel', {
    y: 60, opacity: 0, duration: 1.3, ease,
    scrollTrigger: { trigger: '.carrossel', start: 'top 90%', once: true },
  });
});

// Fotos com lazy loading mudam a altura da página ao carregar: recalcula os gatilhos.
window.addEventListener('load', () => ScrollTrigger.refresh());
