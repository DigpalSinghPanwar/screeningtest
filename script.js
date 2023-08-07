let myBoxElement = document.querySelectorAll(".parent-div");
myBoxElement.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    if (e.target.checked) {
      addClass(index);
    }
  });
});

addClass(0);

function addClass(index) {
  myBoxElement.forEach((element, index2) => {
    if (index2 === index) {
      element.classList.add("show-dropdown");
      element.lastElementChild.classList.add("show");
    } else {
      element.classList.remove("show-dropdown");
      element.lastElementChild.classList.remove("show");
    }
  });
}
