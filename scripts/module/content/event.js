/**
 * CES Content Event
 * Created by Yuiitsu on 2018/10/24.
 */
App.event.extend('content', function() {

    let self = this;

    this.event = {
        translate_close: function() {
            $('html').on('click', '#translate-js-mask', function(e) {
                debugger
                $('#translate-js-mask').remove();
                $('#translate-container').remove();
                e.stopPropagation();
            });
        }
    }
});
