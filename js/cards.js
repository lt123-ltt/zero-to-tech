import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

export function initCardsAnim() {
  anime({
    target:".card", 
    opacity: [0, 1],
    translateY: [24, 0],
    delay: anime.stagger(120),
    duration: 700,
    easing: "easeOutBack",
  });
}