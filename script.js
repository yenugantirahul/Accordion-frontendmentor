const plusIcons = document.querySelectorAll(".plus"); // Use .plus to select elements with the 'plus' class
const ans = document.querySelectorAll(".answer");
plusIcons.forEach((plus, ind) => {
  let toggle = false;

  plus.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      plus.setAttribute("src", "./assets/images/icon-plus.svg");
      ans[ind].style.display = "none";
    } else {
      plus.setAttribute("src", "./assets/images/icon-minus.svg");
      ans[ind].style.display = "block";
    }
  });
});
