document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const envelope = document.querySelector(".envelope");
  const card = document.querySelector(".card");

  container.addEventListener("click", function () {
    envelope.classList.toggle("open");
    card.classList.toggle("open");
  });
});