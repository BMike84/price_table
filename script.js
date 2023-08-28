$("ul").on("click", "li", function () {
  var pos = $(this).index() + 2;
  $("tr").find("td:not(:eq(0))").hide();
  $("td:nth-child(" + pos + ")").css("display", "table-cell");
  $("tr").find("th:not(:eq(0))").hide();
  $("li").removeClass("active");
  $(this).addClass("active");
  // btn backgorund
  if ($(".pink").hasClass("active")) {
    $(".btn-pink").addClass("tab-pink");
  } else {
    $(".btn-pink").removeClass("tab-pink");
  }
  if ($(".green").hasClass("active")) {
    $(".btn-green").addClass("tab-green");
  } else {
    $(".btn-green").removeClass("tab-green");
  }
  if ($(".blue").hasClass("active")) {
    $(".btn-blue").addClass("tab-blue");
  } else {
    $(".btn-blue").removeClass("tab-blue");
  }
});

// Initialize the media query
var mediaQuery = window.matchMedia("(min-width: 670px)");

// Add a listen event
mediaQuery.addListener(doSomething);

// Function to do something with the media query
function doSomething(mediaQuery) {
  if (mediaQuery.matches) {
    $(".col-span").attr("colspan", 4);
  } else {
    $(".col-span").attr("colspan", 2);
  }
}

// On load
doSomething(mediaQuery);
