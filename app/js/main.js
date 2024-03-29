$(function () {
  $('.filter__btn').click(function () {
    $('.blog__navigation').toggleClass("active");
    $('.filter__btn').toggleClass("active");
  });
  $('.shop-content__filter-icons').click(function () {
    $('.shop-filter').toggleClass("active");
    $('.shop-content__filter-icons').toggleClass("active");
  });
  // filter
  // адаптивний бургер
  $('.burger, .menu a').click(function () {
    $('.menu__list').toggleClass("active");
    $('.burger').toggleClass("active");
  });
  // адаптивний бургер
  // tabs
  var tab = $('#tabs .tabs-items > div');
  tab.hide().filter(':first').show();
  // Клики по вкладкам.
  $('#tabs .tabs-link').click(function () {
    tab.hide();
    tab.filter(this.hash).show();
    $('#tabs .tabs-link').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();
  // Клики по якорным ссылкам.
  $('.tabs-target').click(function () {
    $('#tabs .tabs-link[href=' + $(this).data('id') + ']').click();
  });
  // tabs
  // стилизация инпутов
  $('.pendant__content-input').styler();
  // стилизация инпутов
  // параметри кнопок
  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });
  $('.button-list').on('click', function () {
    $('.products__item').addClass('products__item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');

  });
  $('.button-grid').on('click', function () {
    $('.products__item').removeClass('products__item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });
  // параметри кнопок
  // звездний рейтинг
  $(".filter-products__stars").rateYo({
    starWidth: "11px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });
  $(".products__item__stars,.pendant__content-stars").rateYo({
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
  $('.pendant__slider-carts').slick({
    asNavFor: '.pendant__slider-big',
    arrows: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
  });
  $('.pendant__slider-big').slick({
    asNavFor: '.pendant__slider-carts',
    arrows: false,
    draggable: false,
    fade: true
  });

  $('.top__slider-inner').slick({
    arrows: false,
    dots: true,
    fade: true,
  });
  $('.related-products__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-left slick-btn"><img src="images/icons/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-right slick-btn"><img src="images/icons/arrows-right2.svg" alt=""></button>',
    infinite: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.pendant__slider-carts').slick({
    asNavFor: '.pendant__slider-big',
    arrows: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
  });
  $('.pendant__slider-big').slick({
    asNavFor: '.pendant__slider-carts',
    arrows: false,
    draggable: false,
    fade: true
  });
  // слайдер
  // микситаб
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  // микситаб


});