// Function for hide Navbar while scrolling
$(function() {
    let prevScrollPos = window.pageYOffset;
    $(window).scroll(function() {
        $('.navbar-collapse').collapse('hide');
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            $('#navbar').css({'top':'0'});
        } else {
            if (prevScrollPos > 100) {
                $('#navbar').css({'top':'-90px'});
            }
        }
        prevScrollPos = currentScrollPos;
    });
});

//Function for Animate Navbar Toggler button
$(function() {
    let p = 0
    $('.navbar-toggler').click(function() {
        p += 90
        p = (p > 270) ? p = 0 : p
        $('.navbar-toggler-icon').css({
            'transform' : `rotate(${p}deg)`,
            'transition' : 'transform 500ms'
        });
    });
});

//Function for Show Modal when submit Join registration
$('#registration').submit(function(e) {
    e.preventDefault();
    
    if ($('#checkbox').is(':checked')) {
    $('#modelId').modal('show');
    }

    $(this)[0].reset();
});

//Same as above but this is for Message Form cuz idk how to write a code :v
$('#message').submit(function(e) {
    e.preventDefault();
    
    if ($('#checkbox').is(':checked')) {
    $('main #modelId').modal('show');
    }

    $(this)[0].reset();
});

//Same as above but this is for subscribe mail :v
$('#subscribe-form').submit(function (e) { 
    e.preventDefault();
    $('footer .form-control').val("");
    $('footer #modelId').modal('show');
});