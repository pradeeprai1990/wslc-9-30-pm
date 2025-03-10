$("#teamSlider").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$("#keyItems").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
   
    autoplay:false,
    autoplayTimeout:2000,
   
    responsive:{
        0:{
            items:1,
            dots:true
        },
        600:{
            items:2
        },
        1000:{
            items:4,
            dots:false,
            mouseDrag:false,
            touchDrag:false,
        }
    }
})



AOS.init();

// let slider=$("#teamSlider")
// let jsSlider=document.querySelector("#teamSlider")