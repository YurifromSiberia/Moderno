$(function() {
  

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

      $('.products-slider-inner').slick({

     nextArrow: false,
     prevArrow: false,
     speed:3000,
     dots: true,
     slidesToShow:4,
     slidesToScroll: 4

      });

      
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$"
  });

      $('.icon-th-list').on('click', function(){
        $('.products__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
      });

      $('.icon-th-large').on('click', function(){
        $('.products__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');

      });

      $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.product-one__tabs.tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });

   $('.menu__btn').on('click',function(){
    $('.menu__list').slideToggle();
   });



    var mixer = mixitup('.products__inner-box');

});


 