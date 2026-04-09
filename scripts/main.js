document.addEventListener("DOMContentLoaded", () => {
  const reviews = document.querySelectorAll("div.card");
  let current = 0;

  function showReview(index) {
    reviews.forEach((rev, i) => {
      rev.classList.toggle("active", i === index);
    });
  }

  function startCarousel() {
    showReview(current);
    setInterval(() => {
      current = (current + 1) % reviews.length;
      showReview(current);
    }, 5000);
  }

  const mediaQuery = window.matchMedia("(max-width: 768px)");
  if (mediaQuery.matches) {
    startCarousel();
  }

  mediaQuery.addEventListener("change", e => {
    if (e.matches) {
      startCarousel();
    } else {
      reviews.forEach(r => r.classList.add("active"));
    }
  });
});
