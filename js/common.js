$(document).ready(function () {

  var previousScroll = 0,
    navBarOrgOffset = 70;

  $(window).scroll(function () { //To show and hide the menu when scroll
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll + " and " + previousScroll + " and " + navBarOrgOffset);
    if (currentScroll > navBarOrgOffset) {
      if (currentScroll > previousScroll) {
        $('.navbar').hide();
      } else {
        $('.navbar').show();
        $('.navbar').css('position', 'fixed');
      }
    } else {
      $('.navbar').css('position', 'absolute');
    }
    previousScroll = currentScroll;
  });

  (function (window, document, undefined) { //Manages the mobile menu button

    var navTrigger = document.querySelector('.mob_nav_btn');

    navTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('is-active');
    }, false);
  })(window, document);

  $(".mob_nav_btn").on('click', function () {
    $(".hidden").toggleClass('hidden');
    $(this).css("background-color", "none");
    if ($(".mobile_menu").is(":hidden")) {
      $(".mobile_menu").fadeIn(600);
    } else {
      $(".mobile_menu").fadeOut(600);
    }
  });
  $(".mob_mnu").on('click', function () {
    $(".mobile_menu").fadeOut(600);
    $(".mob_nav_btn").removeClass("is-active");
    $(".hidden").toggleClass('hidden');
  });

  $('.border_wrap').waypoint(function (direction) {//Waypoint for animation
    if (direction === "down") {
      $('.border_wrap').css("opacity", "1");
      $('.border_wrap').removeClass('animated fadeOutDown').addClass('animated fadeInUp');
    } else {
      $('.border_wrap').css("opacity", "0");
      $('.border_wrap').removeClass('animated fadeInUp').addClass('animated fadeOutDown');
    }
  }, {
      offset: 1010
    });

  $('.about_btn').on('click', function () { //To show and hihe menu in mobile footer
    $('.about_btn').toggleClass('active');
    if ($('.tools_btn, .legal_btn, .info_btn').hasClass('active')) {
      $('.tools_btn, .legal_btn, .info_btn').removeClass('active');
    }
  });
  $('.tools_btn').on('click', function () {
    $('.tools_btn').toggleClass('active');
    if ($('.about_btn, .legal_btn, .info_btn').hasClass('active')) {
      $('.about_btn, .legal_btn, .info_btn').removeClass('active');
    }
  });
  $('.legal_btn').on('click', function () {
    $('.legal_btn').toggleClass('active');
    if ($('.tools_btn, .about_btn, .info_btn').hasClass('active')) {
      $('.tools_btn, .about_btn, .info_btn').removeClass('active');
    }
  });
  $('.info_btn').on('click', function () {
    $('.info_btn').toggleClass('active');
    if ($('.about_btn, .legal_btn, .tools_btn').hasClass('active')) {
      $('.about_btn, .legal_btn, .tools_btn').removeClass('active');
    }
  });

  $(function () { //Validation in register, authorization and recover lists
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  });

  $(".register, .main_reg, .register-button").on('click', function () {//To show and hihe register, authorization and recover lists
    $(".hidden").toggleClass('hidden');
    if ($(".reg_form").is(":hidden")) {
      $(".reg_form").fadeIn(600);
      $(".authorization_form").fadeOut(600);
    } else {
      $(".reg_form").fadeOut(600);
    }
  });

  $(".signin_btn, .authorization").on('click', function () {//To show and hihe register, authorization and recover lists
    $(".hidden").toggleClass('hidden');
    if ($(".authorization_form").is(":hidden")) {
      $(".authorization_form").fadeIn(600);
      $(".reg_form").fadeOut(600);
    } else {
      $(".authorization_form").fadeOut(600);
    }
  });

  $(".reset-button").on('click', function () {//To show and hihe register, authorization and recover lists
    $(".hidden").toggleClass('hidden');
    if ($(".reset_form").is(":hidden")) {
      $(".reset_form").fadeIn(600);
      $(".authorization_form").fadeOut(600);
    } else {
      $(".reset_form").fadeOut(600);
    }
  });

  $(".navbar_brand").on('click', function () {//To show and hihe register, authorization and recover lists when click logo
    $(".hidden").toggleClass('hidden');
    $(".reset_form").fadeOut(600);
    $(".authorization_form").fadeOut(600);
    $(".reg_form").fadeOut(600);
  });

});