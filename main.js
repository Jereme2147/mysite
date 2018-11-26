
$(document).ready(function(){
    let large = window.matchMedia("(min-width: 421px)");
    let small = window.matchMedia("(max-width: 420px)");
   /* large media */
    if (large.matches) {
        $('.photo-div').hover(function () {
            // $('.popUp').show("slow");
            $('.popUp').fadeIn(1000);
            $('#front-photo').show();
            // $('#title').css({'font-size' : '8vh'})
            $("#title").animate({
                fontSize: "8vh"
            }, 1000);
        }, function () {
            $('#front-photo').hide();
        })
        $('.photo-div').click(function () {
            $('.popUp').toggle();
            $("#title").animate({
                fontSize: "10vh"
            }, 1000);
        })
    };
    /* small media */
    /* toggles menu and slides photo up.  */
    if (small.matches) {
        $('.popUp').hide();
        $('.photo-div').click(function () {
            $('.popUp').show();
            $('.photo-div').animate({
                marginTop: "0"
            }, 500);
            /* toggles photo for 1 second */
            $('#back-photo').html(`<img src="surprised.png" alt="my picture" id="photo">`);
            setTimeout(() => {
                $('#back-photo').html(`<img src="noexpression.png" alt="my picture" id="photo">`); 
            }, 1000);
        });
    };
 
    //info button hover
    $('#info').mouseenter(function(){
        $('#pricing').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });
        setTimeout(() => {
            $('#pricing').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 100);
        setTimeout(() => {
            $('#contact').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        }, 200);
        setTimeout(() => {
            $('#contact').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 300);
        setTimeout(() => {
            $('#extra').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        }, 400);
        setTimeout(() => {
            $('#extra').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 500);
        setTimeout(() => {
            $('#info').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        }, 600);
        setTimeout(() => {
            $('#info').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 700);
    });
    //pricing button hover 
    $('#pricing').mouseenter(function () {
        $('#contact').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        setTimeout(() => {
            $('#contact').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 100);
        setTimeout(() => {
            $('#extra').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        }, 200);
        setTimeout(() => {
            $('#extra').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 300);
        setTimeout(() => {
            $('#info').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        }, 400);
        setTimeout(() => {
            $('#info').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 500);
        setTimeout(() => {
            $('#pricing').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });
        }, 600);
        setTimeout(() => {
            $('#pricing').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 700);
    });
    //contact button hover 
    $('#contact').mouseenter(function () {
        $('#extra').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        setTimeout(() => {
            $('#extra').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 100);
        setTimeout(() => {
            $('#info').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        }, 200);
        setTimeout(() => {
            $('#info').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 300);
        setTimeout(() => {
            $('#pricing').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });
        }, 400);
        setTimeout(() => {
            $('#pricing').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 500);
        setTimeout(() => {
            $('#contact').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        }, 600);
        setTimeout(() => {
            $('#contact').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 700);
    });
    $('#extra').mouseenter(function () {
        $('#info').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        setTimeout(() => {
            $('#info').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 100);
        setTimeout(() => {
            $('#pricing').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });
        }, 200);
        setTimeout(() => {
            $('#pricing').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 300);
        setTimeout(() => {
            $('#contact').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow
        }, 400);
        setTimeout(() => {
            $('#contact').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 500);
        setTimeout(() => {
            $('#extra').css({ 'box-shadow': '3px 3px 20px 1px #50D8D7' });//must change to popUp shadow    
        }, 600);
        setTimeout(() => {
            $('#extra').css({ 'box-shadow': '3px 3px 12px #474044' });//must change to popUp shadow
        }, 700);
    });

});