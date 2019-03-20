 require("./../css/slider.css");
;(function($, window, document,undefined) {
    'use strict';
    var slider=function(ele,opt){
        this.$element=ele;
        this.defaults={
            initialSlide:1,
            speed:2500,
            button:true,
            pageIcon:true,
            autoPlay:true
        };
        this.options = $.extend({}, this.defaults, opt);
    };
    slider.prototype = {
        init: function(){
            //初始化
            var ele=this.$element;
            var index = this.options.initialSlide;
            this.initIndex(ele,index);
            this.options.pageIcon && this.pageIcon(ele,index);
            this.options.button && this.btnClick(ele);
            this.options.autoPlay && this.loop(ele);
            //事件绑定
            this.eventBind(ele,index);
        },
        initIndex:function (ele,index) {
            var item = ele.find(".slider-box")
                , itemList = item.find(".slider-item")
                , length = itemList.length
                , lastItem = itemList.eq(length - 1).clone()
                , firstItem = itemList.eq(0).clone()
                , width = ele.width();
                index = index < 0 || index > length ? 0 : index;
                item.width((length + 2) * width).prepend(lastItem).append(firstItem).css("left", (index) * -width);
                item.find(".slider-item").width(width);
                itemList.eq(index-1).addClass("slider-active");
        },
        pageIcon:function (ele,index) {
            var itemLength=ele.find(".slider-item").length-2;
            for (var n = 0; n < itemLength; n++){
                  var  Iconss ='<span data-index="' + (n+1) + '"></span>';
                  var itemIcon = ele.find(".carousel-indicators");
                  itemIcon.append(Iconss);
                  ele.find(".carousel-indicators span").eq(index-1).addClass("active");
            }
        },
        btnClick:function (ele) {
            ele.append('<span class="carousel-btn carousel-prev-btn"></span><span class="carousel-btn carousel-next-btn"></span>')
        },
        animate:function (w) {
            var ele=this.$element;
            var index = this.options.initialSlide;
            var button=this.options.button;
            var box = ele.find(".slider-box"),
                widths = ele.width(),
                length = box.find(".slider-item").length-2;
            //.animate(styles,speed,easing,callback)
            //stop()等价于stop(false,false):停止被选元素当前的动画，但允许完成以后队列的所有动画。（其他动画可以继续）
            //stop(true)等价于stop(true,false): 停止被选元素的所有加入队列的动画。(全部动画停止到一半)
        　　//stop(true,true):停止被选元素的所有加入队列的动画，但允许完成当前动画。（停止但完成）
        　　//stop(false,true):立即结束当前的动画到最终效果，然后完成以后队列的所有动画。
            box.stop(true,true).animate({
                left: box.position().left + w
            },function () {
                var lefts=box.position().left;
                w < 0 && lefts < -widths * length && box.css("left", -widths),
                w > 0 && lefts > -widths && box.css("left", -widths *length),
                index= box.position().left / -widths - 1,
                button && ele.find(".carousel-indicators span").removeClass("active").eq(index).addClass("active");
                ele.find(".slider-box .slider-item").removeClass("slider-active").eq(index+1).addClass("slider-active");
            })
        },
        loop:function (ele) {
            var nextBtn=ele.find(".carousel-next-btn");
            ele.timer=setInterval(function () {
                // $(selector).trigger(event,[param1,param2,...])规定被选元素要触发的事件
                nextBtn.trigger("click")
            },this.options.speed)
        },
        eventBind:function (ele,index) {
            //防止内部事件this冲突
            var that = this;
            var prev=ele.find(".carousel-prev-btn"),
                next=ele.find(".carousel-next-btn"),
                iconButton=ele.find(".carousel-indicators"),
                width=ele.width(),
                bd=(ele.find(".slider-item").length, this.options.autoPlay);
                next.on("click",function () {
                    that.animate(-width);
                });
                prev.on("click", function() {
                    that.animate(width)
                });
                iconButton.on("click", "span", function() {
                    var thisIndex=$(this).attr("data-index");
                    var activeIndex=iconButton.find(".active").attr("data-index");
                    that.animate((thisIndex - activeIndex) * -width);
                });
        }
    };
    $.fn.Slider=function(options){
        var Slider = new slider(this, options);
        return Slider.init();
    }
})(jQuery, window, document);