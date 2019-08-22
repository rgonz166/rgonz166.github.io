// Starts smooth scroll on click
// $('.navbar a').on('click',function(e){
//     e.preventDefault();
//     var hash = this.hash;

//     $('html, body').animate({
//         scrollTop: $(hash).offset().top
//     },300);
// })


var scroll = new SmoothScroll('.navbar a[href*="#"]',{speed: 800});