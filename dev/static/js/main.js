$(document).ready(function(){

  $('#togle-btn').on('click', function(e){
    e.preventDefault();
    $('.hidden-mnu').slideToggle();
  });

  $('nav .menu').clone().addClass('hidden-mnu').appendTo('.responsive-menu');


  // count up
  $('.about').waypoint(function(){
    let nums = [42,123,15,99,24]
    $('.count-up').each(function (index) {
      let params = {
        start: 0,
        last: nums[index],
        duration: 1000
      }
      $(this).countUp(params);
    })
  });


// accordion
  $('.desc-list li').on('click', function(){
    $(this).next()
      .slideToggle(500)
        .siblings('.inner-text')
          .slideUp()
  });

// slick carousel
  $('.slider').slick({
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  });







});