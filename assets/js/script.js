const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    const parent = img.closest("figure") || img.parentElement;
    img.style.display = "none";
    if (!parent.querySelector(".missing-image")) {
      const div = document.createElement("div");
      div.className = "missing-image";
      div.textContent = "Image coming soon";
      parent.prepend(div);
    }
  });
});
