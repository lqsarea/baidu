$(function () {
   //获取相关元素
    var $snBanner = $('.sn_banner');
    var width = $snBanner.width();
    var $imageBox = $snBanner.find('ul:first');
    var $pointBox = $snBanner.find('ul:last');

    var animateFuc =  function () {
        $imageBox.animate({transform:'translateX('+(-index*width)+'px)'},200,'easing',function () {
            //索引大于或者等于9的时候回到1
            if(index >= 9){
                index = 1;
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }else if(index <=0 ){
                //索引小于等于0的时候回到8
                index = 8;
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }
            //小点
            $pointBox.find('li').removeClass('now').eq(index-1).addClass('now');
        });
    }

 //自动轮播
    var index = 1;
    var timer = setInterval(function () {
        index ++;
        animateFuc();
    },3000);
    $snBanner.on('swipeLeft',function () {
        console.log('next');
        /*下一张图片*/
        index ++;
        animateFuc();
    }).on('swipeRight',function () {
        console.log('prev');
        /*上一张图片*/
        index --;
        animateFuc();
    });

});
