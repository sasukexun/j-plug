;(function($, window, document,undefined) {
    'use strict'
    var share=function(ele,opt){
        this.$element=ele,
            this.defaults={
                title:"",
                image:"",
                content:"",
                url:"",
                qqZone:"",
                sina:"",
                renren:"",
                douban:""
            },
            this.options = $.extend({}, this.defaults, opt)
    }
    share.prototype = {
        init: function(){
            var ele=this.$element;
            var qq=ele.find(this.options.qqZone);
            var sina=ele.find(this.options.sina);
            var renren=ele.find(this.options.renren);
            var douban=ele.find(this.options.douban);
            qq.click(function () {
                ShareUrl('qzone');
            });
            sina.click(function () {
                ShareUrl('sina');
            });
            renren.click(function () {
                ShareUrl('renren');
            });
            douban.click(function () {
                ShareUrl('douban');
            });
            var title=this.options.title;
            var img=this.options.image;
            var content=this.options.content;
            var url=this.options.url;
            function ShareUrl(type){
                switch (type) {
                    case "sina":
                        url = "http://service.weibo.com/share/share.php?title=" + encodeURIComponent(content + '「' + title + '」' + ' 点这里' + url) + '&pic=' + img;
                        window.open(url);
                        break;
                    case "qzone":
                        url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&site=&pics=' + encodeURIComponent(img) + '&desc=' + encodeURIComponent(content) +'&summary=' + encodeURIComponent(content);
                        window.open(url);
                        break;
                    case "renren":
                        url = 'http://widget.renren.com/dialog/share?resourceUrl=' + encodeURIComponent(url) + '&srcUrl=' + img + '&title=' + encodeURIComponent(title);
                        +'&description=' + content;
                        window.open(url);
                        break;
                    case "douban":
                        url = 'http://www.douban.com/recommend/?url=' + encodeURIComponent(url) + '&srcUrl=' + img + '&title=' + encodeURIComponent(title);
                        +'&description=' + content;
                        window.open(url);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    $.fn.Share=function(options){
        var Share = new share(this, options);
        return Share.init();
    }
})(jQuery, window, document);
