"use strict";


//TextRotator:

$(document).ready(function() {
    $(".rotate").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 2000 // How many milliseconds until the next word show.
    });


    //cups of coffee timer

    $('.timer1').countTo({
        from: 0,
        to: 257,
        speed: 1000,
        refreshInterval: 1000,
        formatter: function(value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function(value) {
            console.debug(this);
        },
        onComplete: function(value) {
            console.debug(this);
        }
    });

    //lines of code timer

    $('.timer2').countTo({
        from: 0,
        to: 999,
        speed: 1000,
        refreshInterval: 5,
        formatter: function(value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function(value) {
            console.debug(this);
        },
        onComplete: function(value) {
            console.debug(this);
        }
    });

    //Happy Customer timer

    $('.timer3').countTo({
        from: 0,
        to: 300,
        speed: 1000,
        refreshInterval: 5,
        formatter: function(value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function(value) {
            console.debug(this);
        },
        onComplete: function(value) {
            console.debug(this);
        }
    });


    //$('.timer').countTo();

    //Jquery Wow.Js Animations:

    new WOW().init();


    //wow end

    //Customers Owl Carousel




    //Customers Owl Carousel End
 $("#owl").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

 //Form Submission

 $(function() {
    $(".sbutton").click(function() {
      // validate and process form here
    });
  });

});



//$(document).ready(function() {

 //   $("#owl-example").owlCarousel(
   //     autoPlay: 3000,
     //   stopOnHover: "true"
       // );
    






//});