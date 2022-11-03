jQuery(document).ready(function ($) {
  // tung
  jQuery(".slide_price_domain").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    dots: false,
    autoplaySpeed: 5000,
    // fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrow: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrow: false,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // end tung

  $(".baner-slide").slick({
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
  });

  $(".slider-nav-top").slick({
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,

    slidesToShow: 2,
    slidesToScroll: 2,
    // asNavFor: '.slider-for',
    // dots: true,
    cssEase: "linear",
    centerMode: true,
    focusOnSelect: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          arrow: false,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


// $('header .nav-menu_list ul.menu-list_item').hide()
// $(document).ready(function(){
//   $('.menu-mobe').slick(function(){
//     $('header .nav-menu_list ul.menu-list_item').show();
//   })
// })

// menu mobile
jQuery(".icon_mobile_click").click(function () {
  jQuery(this).fadeOut(300);
  jQuery("#menu_mobile_lp_18102021")
    .addClass("menu_show")
    .stop()
    .animate({ left: "0px" }, 260);
  jQuery(".close_menu, .bg_opacity").show();
});
jQuery(".close_menu").click(function () {
  jQuery(" .icon_mobile_click").fadeIn(300);
  jQuery("#menu_mobile_lp_18102021")
    .animate({ left: "-260px" }, 260)
    .removeClass("menu_show");
  jQuery(this).hide();
  jQuery(".bg_opacity").hide();
});
jQuery(".bg_opacity").click(function () {
  jQuery("#menu_mobile_lp_18102021")
    .animate({ left: "-260px" }, 260)
    .removeClass("menu_show");
  jQuery(".close_menu").hide();
  jQuery(this).hide();
  jQuery(".icon_mobile_click").fadeIn(300);
});
jQuery("#menu_mobile_lp_18102021 ul li a").click(function () {
  jQuery(".icon_mobile_click").fadeIn(300);
});
jQuery(
  ".mobile-menu .menu>li:not(:has(ul.sub-menu)) , .mobile-menu .menu>li ul.sub-menu>li:not(:has(ul.sub-menu))"
).addClass("not-have-child");

var width = jQuery(window).width();
if (width > 768) {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      // $('.page-top').addClass('display');
      $(".header-nav_menu").addClass("fixed");
    } else {
      // $('.page-top').removeClass('display');
      $(".header-nav_menu").removeClass("fixed");
    }
  });
  new WOW().init();
}

// $(document).ready(function () {
//   $(".btn_service").click(function () {
//     alert("ok");
//     $(".product-list_box").addClass("one-time");
//   });
// });
