document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS Loaded");

  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");
  const effectSelect = document.getElementById("effectSelect");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;

  // ✅ FILTER BY CATEGORY
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ✅ LIGHTBOX FUNCTIONALITY
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      lightbox.classList.remove("hidden");
      lightboxImg.src = card.querySelector("img").src;
      currentIndex = index;
    });
  });

  // ✅ NEXT / PREV BUTTONS
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    lightboxImg.src = cards[currentIndex].querySelector("img").src;
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    lightboxImg.src = cards[currentIndex].querySelector("img").src;
  });

  // ✅ CLOSE LIGHTBOX
  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  // ✅ IMAGE EFFECTS (GRAYSCALE, BLUR, BRIGHTNESS)
  effectSelect.addEventListener("change", () => {
    const effect = effectSelect.value;
    document.querySelectorAll(".card img").forEach((img) => {
      img.style.filter = effect;
    });
  });
});
