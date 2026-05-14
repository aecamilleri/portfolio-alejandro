document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-card");

  function applyFilter(filter) {
    portfolioItems.forEach((item) => {
      const category = item.dataset.category;
      item.style.display = category === filter ? "grid" : "none";
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      applyFilter(button.dataset.filter);
    });
  });

  const activeButton = document.querySelector(".filter-btn.active");
  if (activeButton) {
    applyFilter(activeButton.dataset.filter);
  }
});
