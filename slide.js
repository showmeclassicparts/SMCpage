    $(document).on('ready', function() { 
      $(".variable").slick({
        
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        // prevArrow:true,
        // slidesToScroll: 1,
        swipeToSlide:true,
        autoplay: true,
        autoplaySpeed: 20000, 
        infinite: true,
        prevArrow: $('.prevsilde'),
        nextArrow: $('.nextslide'),

        // arrows: false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            infinite: true,
            // slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            infinite: true,
            // slidesToScroll: 1
            
          }
        }
      ]
      });
      
    });
    $(document).on('ready', function() { 
      $(".variable2").slick({
        
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        
        // prevArrow:true,
        // slidesToScroll: 1,
        swipeToSlide:true,
        autoplay: true,
        autoplaySpeed: 20000, 
        infinite: true,
        // prevArrow: $('.prevsilde'),
        // nextArrow: $('.nextslide'),

        arrows: false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            infinite: true,
            // slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
            // slidesToScroll: 1
            
          }
        }
      ]
      });
      
    });