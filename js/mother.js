$(document).ready(function(){
    $('a[href=#01]').click(function() {

        $('html,body').animate({

          scrollTop:$('#01').offset().top

        }, 600 );

        return false;

    });

    $('a[href=#02]').click(function() {

        $('html,body').animate({

          scrollTop:$('#02').offset().top

        }, 1000);

        return false;

    });

    $('a[href=#03]').click(function() {

        $('html,body').animate({

scrollTop:$('#03').offset().top

        }, 2000);

        return false;

    });

    $('a[href=#04]').click(function() {

        $('html,body').animate({

          scrollTop:$('#04').offset().top

        }, 2000);

        return false;

    });

});
