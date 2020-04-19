$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar .navbar-brand img").attr(
        "src",
        require("../images/b_roma.png")
      );
    } else {
      $(".navbar .navbar-brand img").attr(
        "src",
        require("../images/w_roma.png")
      );
    }
  });
});
