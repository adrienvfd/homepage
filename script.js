$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 5){
            $('.navbar').addClass("sticky");
            $('.navbar.logo').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
            $('.navbar.logo').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }
        else{
            $('.scroll-up-btn').removeClass("show")

        }
    });

    //Read-More script
    $('#readMore').click(function(){
        var elem = $("#readMore").text();
        if (elem == "Read More")
        {
             $('#more').slideDown();
             $('#dots').slideUp();
             $('#readMore').text("Read Less");
        }
        else {
            $('#more').slideUp();
             $('#dots').slideDown();
            $('#readMore').text("Read More");
        }

    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.scroll-up-btn').removeClass("show");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developper", "Class A modeler", "Product Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


})