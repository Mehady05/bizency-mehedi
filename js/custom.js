$(function () {
    /*  common property
    $().();*/
    // end common property




    $(window).scroll(function () {
        var scrollAmount = $(window).scrollTop();

        if (scrollAmount > 400) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');

        }
    });






    $('.left_bar').click(function () {
        $('.navbar-nav').toggle();

    });


    $('.right_bar_btn').click(function () {
        $('.over_search').addClass('active');
    });

    $('.cls').click(function () {
        $('.over_search').removeClass('active');
    });





    // success
    $('.succ_video').venobox({

    });


    // service 
    $('.slide_services_active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{

            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false
            }

        }, {

            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }

        }, {

            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }

        }]
    });





    // portfolio
    $('.slide_port').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.rgt_btn',
        prevArrow: '.lft_btn',
        responsive: [{

            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false
            }

        }, {

            breakpoint: 577,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }

        }, {

            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }

        }]
    });




    // testimonial

    $('.tesimonial_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.right_btn',
        prevArrow: '.left_btn',
        responsive: [{

            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }

        }, {

            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }

        }, {

            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }

        }]
    });



    // our blog
    $('.slide_wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.rgt_btn_blog',
        prevArrow: '.lft_btn_blog',
        responsive: [{

            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }

        }, {

            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }

        }, {

            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }

        }]
    });



    $('.last_icon').click(function () {
        event.preventDefault();

        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });


    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();





});