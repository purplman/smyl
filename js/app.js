$(function () {
  // clubs slider
  var left_slider = $(".projects__left-slider");
  var right_slider = $(".projects__right-slider");

  let l_width = $(".projects__right-slide").width();

  // slider buttons
  var next = $(".next");
  var prev = $(".prev");

  prev.hide();

  let left_max = $(".projects__left-slide").length * 600;
  let right_max = $(".projects__right-slide").length * l_width;

  let left = 0;
  let r_left = 0;

  var swipe = (left, r_left) => {
    left_slider.animate({
      left: left,
    });

    right_slider.animate({
      left: r_left,
    });
  };

  next.on("click", function (e) {
    e.preventDefault();
    prev.fadeIn();
    left = left - 600;
    r_left = r_left - l_width;
    if (Math.abs(left) == left_max - 600) next.hide();
    swipe(left, r_left);
  });

  prev.on("click", function (e) {
    e.preventDefault();
    next.fadeIn();
    left = left + 600;
    r_left = r_left + l_width;

    if (left >= 0) prev.hide();
    swipe(left, r_left);
  });

  $(window).on("mousemove", (e) => {
    $(".cursor").css({
      top: e.pageY + "px",
      left: e.pageX + "px",
    });
  });

  $(".hero__center").hover(
    () => {
      $(".cursor").addClass("cursor--over");
    },
    () => {
      $(".cursor").removeClass("cursor--over");
    }
  );

  $(".slider__btn").hover(
    () => {
      $(".cursor").addClass("cursor--over");
    },
    () => {
      $(".cursor").removeClass("cursor--over");
    }
  );
});
