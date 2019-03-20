require("./../css/spillover.css");
;(function($, window, document,undefined) {
    'use strict'
    var Slh=function(ele,opt){
        this.$element=ele,
            this.defaults={
                line:1
            }
        this.options = $.extend({}, this.defaults, opt)
    }
    Slh.prototype={
        init:function(){
            var self = this,
                ele = self.$element;
            var line=this.options.line;
            $.each(ele,function(i,item){
                var height=$(this).height();
                var lineHeight=parseInt($(this).css('line-height'));
                var heighs=(lineHeight*line);
                if(heighs<height){
                    $(this).addClass("slh");
                    $(this).css({
                        height:heighs,
                        position:"relative",
                        overflow: "hidden",
                    })
                }
            })
        }
    }
    $.fn.slh=function(options){
        var slh = new Slh(this, options);
        return slh.init();
    }
})(jQuery, window, document);