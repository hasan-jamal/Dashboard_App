// Show the first tab by default
$(".tabs-stage .div-tab").hide();
$(".tabs-stage .div-tab:first").show();
$(".tabs-nav .li-ac:first").addClass("tab-active");

// Change tab class and display content
$(".tabs-nav a").on("click", function (event) {
  event.preventDefault();
  $(".tabs-nav .li-ac").removeClass("tab-active");
  $(this).parent().addClass("tab-active");
  $(".tabs-stage .div-tab").hide();
  $($(this).attr("href")).show();
});
