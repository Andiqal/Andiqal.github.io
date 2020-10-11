

$('.nav-link').on('click', function(e) {

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('body').animate({
        scrollTop : elemenTujuan.offset().top-100
    },1000);


    e.preventDefault();

});

$(window).scroll(function(){
    var wscroll = $(this).scrollTop();
    if(wscroll>500){
        console.log('ok')
    }
});