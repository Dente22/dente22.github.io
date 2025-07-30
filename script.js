/ script.js

// Эффект появления секций
window.addEventListener("load", () => {
  const fadeIns = document.querySelectorAll(".fade-in");
  fadeIns.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});

// Кастомный курсор
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
