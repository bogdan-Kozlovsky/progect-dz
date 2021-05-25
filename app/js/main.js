$(function () {
  $('.top__slider-inner').slick({
    arrows: false,
    dots: true,
    fade: true,
  });
  var mixer = mixitup('.products__items');
  var mixer = mixitup('.new-design__list');


  $('.burger, .menu a').click(function () {
    $('.menu__list').toggleClass("active");
    $('.burger').toggleClass("active");
  });
});