$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });



    // Отрытие попапа
    $('.about-us__button').on('click', function(){
      $('.popup, .popup-bg').fadeIn()
    })
    // Закрытие попапа
    $('.popup-bg').on('click', function(){
      $('.popup, .popup-bg').fadeOut()
    })
    

    // Плавное появление элеменитов при прокрутке
    function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
         change.target.classList.add('element-show');
        }
      });
    }
    
    let options = {
      threshold: [0.5] 
    };
    let observer = new IntersectionObserver(onEntry, options);
    
    for (let elm of $('section')) {
      observer.observe(elm);
    }


    //Burger

    $('.burger-btn').click(function(){
      $(this).toggleClass('open');
    });

    $('.burger-btn').on('click', function () {
      $('.burger-btn .fa-times').toggleClass('fas-hidden');
      if ($('.mobile-menu').css('right') == '0px') {
          $('.mobile-menu').css({
              'right': '-100%'
          });
      } else {
          $('.mobile-menu').css({
              'right': '0'
          });
      }
  })


 });