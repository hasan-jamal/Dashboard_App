$(document).ready(function () {
  $(document).click(function () {
    $(".dropdown-menu.show").removeClass("show");
  });

  $("body").on("click", ".apto-trigger-dropdown", function (e) {
    e.stopPropagation();

    $(this)
      .closest(".apto-dropdown-wrapper")
      .find(".dropdown-menu")
      .toggleClass("show");
  });
});
