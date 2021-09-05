$(function () {
  // clubs slider
  var left_slider = $(".projects__left-slider");
  var right_slider = $(".projects__right-slider");

  let l_width = $(".projects__right-slide").width();

  let m_width = parseInt($(".projects__left-slider").css("max-width"));

  let total_project_count = $(".projects__right-slide").length;

  $(".total-project-count").html(total_project_count);

  // slider buttons
  var next = $(".next");
  var prev = $(".prev");

  prev.hide();

  let left_max = $(".projects__left-slide").length * m_width;
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
    left = left - m_width;
    r_left = r_left - l_width;
    if (Math.abs(left) == left_max - m_width) next.hide();
    swipe(left, r_left);

    $(".current-project").html(parseInt($(".current-project").html()) + 1);
  });

  prev.on("click", function (e) {
    e.preventDefault();
    next.fadeIn();
    left = left + m_width;
    r_left = r_left + l_width;

    if (left >= 0) prev.hide();
    swipe(left, r_left);

    $(".current-project").html(parseInt($(".current-project").html()) - 1);
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

  $(".projects__right-slide").hover(
    () => {
      $(".cursor").addClass("cursor--over");
    },
    () => {
      $(".cursor").removeClass("cursor--over");
    }
  );

  $(".hamburger").on("click", () => {
    $(".mobile-menu").addClass("mobile-menu--active");
  });

  $(".mobile-menu a").on("click", () => {
    $(".mobile-menu").removeClass("mobile-menu--active");
  });

  $(".mobile-menu__closer").on("click", () => {
    $(".mobile-menu").removeClass("mobile-menu--active");
  });

  $(".projects__left-slide").hover(
    () => {
      $(".cursor").addClass("cursor--visit");
    },
    () => {
      $(".cursor").removeClass("cursor--visit");
    }
  );
});
