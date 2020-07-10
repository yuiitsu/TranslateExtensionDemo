/**
 * Created by onlyfu on 2019/03/05.
 */
App.module.extend('content', function() {

    let self = this;
    //
    this.init = function() {
        // 监听消息
        chrome.runtime.onMessage.addListener(function(request, _, response) {
            let method = request.contextMenuId;
            if (self.hasOwnProperty(method)) {
                self[method](request.translate);
            } else {
                self.log('method '+ method +' not exist.');
            }
            response('');
        });
    };

/**
 * 将翻译结果渲染到页面
 * @param {*} explains 
 */
this.translateExtensionDemo = function(explains) {
    let scrollTop = this.module.common.clientSize('scrollTop'), 
        range = window.getSelection().getRangeAt(0), 
        rect = range.getBoundingClientRect(), targetLeft = rect.left, 
        targetTop = scrollTop + rect.top;
    //
    this.view.append('content', 'translate', explains);
    $('#translate-container').css({left: targetLeft, top: targetTop});
}
});
