# jquery.doClick
jquery.doClick：为元素同时绑定单击事件和双击事件。

# 使用方法:
```javascript
    $(dom).doClick({
        /**
         * 点击事件回调
         * @param this：自身dom对象 
         */
        onClick: function () {
            // (注意: this获取自身dom对象)
        }
        /**
         * 双击回调事件
         * @param this：自身dom对象 
         */
        dbClick: function () {
            // (注意: this获取自身dom对象)
        }
    })
```
# 实例销毁
```javascript
    $(dom).doClick('destroy')
```
