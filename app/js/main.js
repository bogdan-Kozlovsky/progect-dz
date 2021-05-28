$(function () {
  // параметри кнопок
  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });
  $('.button-list').on('click', function () {
    $('.products__item').addClass('products__item--list');
  });
  $('.button-grid').on('click', function () {
    $('.products__item').removeClass('products__item--list');
  });
  // параметри кнопок
  // звездний рейтинг
  $(".filter-products__stars").rateYo({
    starWidth: "11px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });
  $(".products__item__stars").rateYo({
    starWidth: "18px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    spacing: "11px"
  });
  // звездний рейтинг
  // ползунок
  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  // ползунок
  // слайдер
  $('.top__slider-inner').slick({
    arrows: false,
    dots: true,
    fade: true,
  });
  // слайдер
  // микситаб
  var mixer = mixitup('.products__items');
  var mixer = mixitup('.new-design__list');
  // микситаб
  // адаптивний бургер
  $('.burger, .menu a').click(function () {
    $('.menu__list').toggleClass("active");
    $('.burger').toggleClass("active");
  });
  // адаптивний бургер
});