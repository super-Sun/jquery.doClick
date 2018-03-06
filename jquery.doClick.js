/**
 * jQuery doClick v 1.0.0
 * Copyright 2018, sunluwei
 * Last Update 2018.03.06
 */
/*
     *  使用方法:
     *      $(dom).doClick({
     *          // 单击事件回调
     *          onClick: function () {}
     *          // 双击事件回调
     *          dbClick: function () {}
     *      })
     */
(function ($) {
    var methods = {
        init: function (options) {
            var p = {
                clickDelay: 300, // 双击间隔事件（毫秒）
                // 单击回调事件
                onClick: function () {
                },
                // 双击回调事件
                dbClick: function () {
                }
            };
            if (options) {
                $.extend(p, options);
            }
            return this.each(function () {
                var timer = null;
                $(this).on("click", function () {
                    var self = this
                    var time = $(this).attr("data-sum");
                    time = 1 * time + 1;
                    $(this).attr("data-sum", time);
                    if (timer == null) {
                        timer = setTimeout(function () {
                            var time = $(self).attr("data-sum")
                            if (time > 1) {
                                // 双击
                                p.dbClick()
                                timer = null;
                            } else {
                                // 单击
                                p.onClick()
                                timer = null;
                            }
                            $(self).attr("data-sum", 0);
                        }, p.clickDelay)
                    }
                });
            });
        }
    };
    $.fn.doClick = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('error ' + method + 'jQuery.doClick not exit!');
        }
    };
})(jQuery)