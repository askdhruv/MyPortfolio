$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.menubar').addClass("sticky");
        }else{
            $('.menubar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.menubar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.menubar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Gamer","Designer", "Developer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Gamer","Designer", "Developer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});