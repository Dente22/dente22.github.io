// script.js
// Здесь можно добавить scroll-эффекты, интерактив и т.п. — позже подключим

// Пример: задержка появления элементов
window.addEventListener("load", () => {
  const fadeIns = document.querySelectorAll(".fade-in");
  fadeIns.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});
