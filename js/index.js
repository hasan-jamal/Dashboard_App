// Navbar

$(document).ready(function () {
  // Toggle menu on click
  $("#menu-toggler").click(function () {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }
});

//  Dropdown

let $$ = function (selector) {
  return document.querySelectorAll(selector);
};
for (let dropdown of $$(".dropdown")) {
  dropdown.addEventListener("focus", function () {
    this.classList.add("dropdown_open");
    this.addEventListener(
      "blur",
      function () {
        this.classList.remove("dropdown_open");
      },
      "once"
    );

    for (let dropdown_item of this.querySelectorAll(".dropdown__item")) {
      dropdown_item.addEventListener("focus", function () {
        dropdown.classList.add("dropdown_open");
        this.addEventListener(
          "blur",
          function () {
            dropdown.classList.remove("dropdown_open");
          },
          "once"
        );
      });
    }
  });
}
// Show And Hide Div
var category = document.getElementById("category");
var subCategory = document.getElementById("subCategory");
subCategory.style.display = "none";
function clickSubCategory() {
  category.style.display = "none";
  subCategory.style.display = "block";
}
function clickCategory() {
  category.style.display = "block";
  subCategory.style.display = "none";
}
