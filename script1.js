$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-button").addClass("show");
    } else {
      $(".scroll-up-button").removeClass("show");
    }
  });

  //slide-up script
  $(".scroll-up-button").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //typing animation script
  var type = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //toggle menu nav bar
  $(".menu-button").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-button i").toggleClass("active");
  });

  //owl carouse script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        item: 1,
        nav: false,
      },
      600: {
        item: 2,
        nav: false,
      },
      1000: {
        item: 3,
        nav: false,
      },
    },
  });
});
