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
  var nav_collapse = $(".navbar-dark");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      nav_collapse.removeClass("navbar-dark").addClass("navbar-light");
    } else {
      nav_collapse.removeClass("navbar-light").addClass("navbar-dark");
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
