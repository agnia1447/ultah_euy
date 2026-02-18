// script.js

document.addEventListener("DOMContentLoaded", () => {
  const nextLink = document.querySelector(".Next a");
  if (nextLink) {
    nextLink.addEventListener("mouseover", () => {
      nextLink.style.backgroundColor = "#ddd";
    });
    nextLink.addEventListener("mouseout", () => {
      nextLink.style.backgroundColor = "#fff";
    });
  }

  // Efek muncul perlahan (fade-in) saat halaman dibuka
  const container = document.querySelector(".container") || document.querySelector(".awal");
  if (container) {
    container.style.opacity = 0;
    container.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
      container.style.opacity = 1;
    }, 300);
  }
});
