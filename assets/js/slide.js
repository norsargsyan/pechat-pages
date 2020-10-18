$('.product-slide').slick({
dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 300,

    responsive: [
    {
      breakpoint: 1060,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }, 
    }
  ]
});
		