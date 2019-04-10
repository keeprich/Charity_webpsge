
// NAVIGATION ENDS

// $(document).ready(function() {
//     $('a[href*="#"]').bind('click', function(e) {
//             e.preventDefault(); // prevent hard jump, the default behavior

//             var target = $(this).attr("href"); // Set the target as variable

//             // perform animated scrolling by getting top-position of target-element and set it as scroll target
//             $('html, body').stop().animate({
//                     scrollTop: $(target).offset().top
//             }, 2500, function() {
//                     location.hash = target; //attach the hash (#jumptarget) to the pageurl
//             });

//             return false;
//     });
// });

// $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();

//     // Show/hide menu on scroll
//     //if (scrollDistance >= 850) {
//     //		$('nav').fadeIn("fast");
//     //} else {
//     //		$('nav').fadeOut("fast");
//     //}

//     // Assign active class to nav links while scolling
//     $('.page-section').each(function(i) {
//             if ($(this).position().top <= scrollDistance) {
//                     $('.navigation a.active').removeClass('active');
//                     $('.navigation a').eq(i).addClass('active');
//             }
//     });
// }).scroll();



$(document).ready(function() {
    $('a[href*="#"]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 2500, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navigation a.active').removeClass('active');
                    $('.navigation a').eq(i).addClass('active');
            }
    });
}).scroll();
// NAVIGATION ENDS

// NAVIGATION COLOR CHANGE ON SCROLL START

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.sticky-top').css('background', 'transparent');
    } 
    if(scroll < 800){
            $('.sticky-top').css('background', 'rgba(51, 0, 0, 0.2)');
        }

        else if (scroll < 2900 ) {
            $('.sticky-top').css('background', 'rgba(52, 168, 68, 0.5)');

        }
    else{
        $('.sticky-top').css('background', 'rgba(23, 162, 184, 0.9)');
    }
});


// NAVIGATION ENDS

// #################### Number Counter #######################

jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.love_counter').offset().top,
        hH = jQuery('.love_counter').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.love_count').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
// #################### Number Counter #######################



// 
$(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 300){
            $('.sticky-top').css('background', 'transparent');
        } 
        if(scroll < 800){
                $('.sticky-top').css('background', 'rgba(51, 0, 0, 0.2)');
            }

            else if (scroll < 2900 ) {
                $('.sticky-top').css('background', 'rgba(52, 168, 68, 0.5)');

            }
        else{
            $('.sticky-top').css('background', 'rgba(23, 162, 184, 0.9)');
        }
    });
// 


// date
var date = new Date();
document.getElementById("demo").innerHTML = date.getFullYear();
// date

new WOW().init();


