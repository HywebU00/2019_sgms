// 自行加入的JS請寫在這裡
$(function() {
	//燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });

    /*-----------------------------------*/
    /////////////modal設定/////////////
    /*-----------------------------------*/
    $('#modal1').hide();                                                                //先隱藏視窗
    $('.modal').after('<div class="modal_overlay"></div>');                             //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>');           //新增關閉按鈕
    $('.modal_overlay').hide();                                                         //隱藏透明底
    //按鈕動作
    $('#openModal').click(function(e) {
        $('#modal1').show();
        $('.modal_overlay').show();
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal1').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);
});