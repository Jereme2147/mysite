
$(document).ready(function(){
    /* after confirmation medium isn't needed, get rid of these old media queries */
   /*  let large = window.matchMedia("(min-width: 1025px)");
    let medium = window.matchMedia("(min-width: 421px) and (max-width: 1024px)");
    let small = window.matchMedia("(max-width: 420px)"); */
    let large = window.matchMedia("(min-width: 501px)");
    // let medium = window.matchMedia("(min-width: 421px) and (max-width: 1024px)");
    let small = window.matchMedia("(max-width: 500px)");
   /* large media  shows popups and animates their fade into position on page*/
    if (large.matches) {
        $('.photo-div').hover(function () {
            $('#front-photo').show();
            $('.photo-div').animate({
                top: "40%"
            }, 1000);
            $('#contact').fadeIn(100);
            $('#contact').animate({
                left: "50vw",
                top: "80vh"
            },1000);
            $('#extra').fadeIn(100);
            $('#extra').animate({
                left: "20vw",
                top: "80vh"
            }, 1000);
            setTimeout(() => {
                $('#pricing').fadeIn(100);
                $('#pricing').animate({
                    left: "50vw",
                    top: "68vh"
                }, 1000);
                $('#info').fadeIn(100);
                $('#info').animate({
                    left: "20vw",
                    top: "68vh"
                }, 1000);
            }, 400);

            // $('#title').css({'font-size' : '8vh'})
            $("#title").animate({
                fontSize: "8vh",
                marginTop: "5vh"
            }, 1000);
        }, function () {
            $('#front-photo').hide();
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
            $('#title').animate({
                marginTop: "5vh"
            }, 500);
            /* toggles photo for 1 second */
            $('#back-photo').html(`<img src="surprised.png" alt="my picture" id="photo">`);
            setTimeout(() => {
                $('#back-photo').html(`<img src="noexpression.png" alt="my picture" id="photo">`); 
            }, 1000);
        });
    };
    /* Medium tablets/narrow screens on the large side */
    /* if (medium.matches) {
        $('#content').html(mediumScreen);
        $('.popUp').hide();
        $('.photo-div').click(function () {
            $('.photo-div').animate({
                marginTop: "5vh"
            }, 500);
            $('#back-photo').html(`<img src="surprised.png" alt="my picture" id="photo">`);
            setTimeout(() => {
                $('#back-photo').html(`<img src="noexpression.png" alt="my picture" id="photo">`);
            }, 1000);
            $('.popUp').show();
            $('#title').animate({
                marginTop: "2vh",
                marginBottom: "5px"
            }, 500);
        })
        
    } */
 
    //info button hover
   /*  $('#info').mouseenter(function(){
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
    }); */
    //pricing button hover 
    /* $('#pricing').mouseenter(function () {
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
    }); */
    //contact button hover 
    /* $('#contact').mouseenter(function () {
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
    }); */
   /*  $('#extra').mouseenter(function () {
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
    }); */

});
/* almost positive I don't need this at all.  Once I've confirmed, it will be deleted. */
/* let mediumScreen = `
        <div id="menu"><!-- will show on all pages except landing -->
        </div> 
        <div id="back-photo" class="photo-div">
            <img src="noexpression.png" alt="my picture" id="photo">
        </div>
        <!-- picture to show on hover / click -->
        <div id="front-photo" class="photo-div">
            <img src="surprised.png" alt="my picture" id="photo">
        </div>
        <div id="medium-screens"> 
            <a href="./outline/info.php" id="aInfor">    
                <div id="info" class="popUp" >
                    <i class="fas fa-info-circle">Info</i>
                </div>
            </a>
            <a href="./outline/outline.php" id="aContact">
                <div id="contact" class="popUp" >
                    <i class="fas fa-envelope">Contact</i>
                </div>
            </a>
            <a href="./outline/outline.php" id="aPricing">
                <div id="pricing" class="popUp">
                    <i class="fas fa-dollar-sign">Pricing</i>
                </div>
            </a>
            <a href="./outline/outline.php" id="aExtra">
                <div id="extra" class="popUp">
                    <i class="fas fa-smile">Extra</i>
                </div>
            </a>
        </div>`; */