$(document).ready(function () {
    new WOW().init();
    $('nav').find('a').click(function () {
        let target = $(this).data('target');
        let o = $(target).offset().top - 86;
        $('html,body').animate({
            scrollTop: o
        }, 300);
    })
    $(window).scroll(function () {
        if ($(window).width() < 768) {
            $("#navtoggle a").click(function () {
                $("#navtoggle").collapse('hide');
            });
        }
        $(window).scroll(function () {
            $("#navtoggle").collapse('hide');
        })
    })
    $('#shopsubmit').click(function () {
        alert('感謝您的訂購，7日內抵達訂購地點。');
        location.reload();
    })
    $('.robot').click(function () {
        $('#chat').fadeToggle();
    })
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600)
    })
    $(window).scroll(function (e) {
        let h = $(window).scrollTop();
        if (h > 650) {
            $('.gotop').addClass('active');
        } else {
            $('.gotop').removeClass('active');
        }
    })
})