// script.js

window.addEventListener("load", () => {
  // 1. Эффект появления секций
  const fadeIns = document.querySelectorAll(".fade-in");
  fadeIns.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });

  // 2. Загрузочный экран
  setTimeout(() => {
    document.getElementById("intro-screen").classList.add("hidden");
  }, 2500);
});

// 3. Кастомный курсор
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
