const modalWindow = document.querySelector(".modal");
const buttonModal = document.querySelectorAll(".button-play");
var player = document.getElementById("Youtube");
buttonModal.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalWindow.classList.add("active");
  });
});
modalWindow.addEventListener("click", () => {
  modalWindow.classList.remove("active");
});
