const rateNum = document.getElementById("rate-num");
const rateMax = document.getElementById("rate-max");
const rateValues = document.querySelector("#rate-values");
const rates = rateValues.querySelectorAll("span");
const submitBtn = document.getElementById("submit");
const modal = document.querySelector(".modal");
const ratingContainer = document.querySelector(".rating-container");


submitBtn.addEventListener("click", () => {
  modal.classList.add("active");
  ratingContainer.style.opacity = "0";
});

// Close modal when you click outside it
window.addEventListener("click", (e) => {
  if (!modal.contains(e.target) && !submitBtn.contains(e.target)) {
    {
      // Hide modal
      modal.classList.remove("active");
      ratingContainer.style.opacity = "1";
    }
  }
});

const last = rateValues.lastElementChild;
rates.forEach((rate) => {
  const value = rate.innerText;
  rate.addEventListener("click", () => {
    rateNum.innerText = value;
    rateMax.innerText = last.innerText;
  });
});
