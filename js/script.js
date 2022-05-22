$(function () {
   //Back to top button Start
   $(window).on('scroll',function(){
        var scrollSize= $(this).scrollTop();
         
        if(scrollSize > 500){
           $('#backTotop_btn').fadeIn(500)
        }else{
         $('#backTotop_btn').fadeOut(500)
        }
      }); // Will Show Back to top button 500 px

   $('#backTotop_btn').click(function(){
      $('html, body').animate({
         scrollTop:0,
      },500);
   }); // Go back To Top
   //Back to top button End
   //Preloader Section Start
   $(window).on('load',function(){
      $('.preloader').fadeOut(3000)
   });
   // Preloader Section End
   // Smooth Scroll Start
   $('a').on('click',function(e){
      e.preventDefault();//For stop Default behavior
      var hash =this.hash;
      if(this.hash){
         $('html , body').animate({
            scrollTop: $(hash).offset().top
         },800);// click and scroll smooth
      }
   }); 
   //Smooth Scroll End

});