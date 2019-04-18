/**
 * jQuery doClick v 1.0.0
 * Copyright 2018, Sunluwei
 * Last Update 2018.03.06
 * https://github.com/super-Sun/jquery.doClick
 */
/*
 *  使用方法:
 *      $(dom).doClick({
 *          // 单击事件回调
 *          onClick: function (self) {}
 *          // 双击事件回调
 *          dbClick: function (self) {}
 *      })
 */
(function ($) {
    var methods = {
        // 初始化
        init: function (options) {
            var p = {
                /**
                 * 双击间隔事件（毫秒）
                 * 默认两次点击事件间隔小于300毫秒，当做双击事件
                 */
                clickDelay: 300,
                /**
                 * 点击事件回调
                 * @param this：自身dom对象
                 */
                onClick: function () {
                },
                /**
                 * 双击回调事件
                 * @param self：自身dom对象
                 */
                dbClick: function (self) {
                }
            };
            if (options) {
                $.extend(p, options);
            }
            return this.each(function () {
                var timer = null;
                var count = 0
                $(this).on("click", function () {
                    var self = this;
                    count++;
                    if (timer == null) {
                        timer = setTimeout(function () {
                            var time = count;
                            if (time > 1) {
                                // 双击
                                p.dbClick.call(self);
                                timer = null;
                            } else {
                                // 单击
                                p.onClick.call(self);
                                timer = null;
                            }
                            count = 0;
                        }, p.clickDelay)
                    }
                });
            });
        },
        // 实例销毁
        destroy: function () {
            var $el = $(this);
            $el.off('click');
        }
    };
    $.fn.doClick = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('error ' + method + 'jQuery.doClick not exist!');
        }
    };
})(jQuery)
