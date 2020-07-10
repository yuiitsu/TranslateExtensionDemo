/**
 * Created by onlyfu on 2019/03/05.
 */
App.module.extend('background', function() {

    let self = this;

    this.init = function() {
        //
        chrome.contextMenus.create({
            type: 'normal',
            title: 'Translate "%s"',
            id: 'translateExtensionDemo',
            contexts: ['selection'],
            onclick: this.contextMenuClick
        }, function() {
            self.log('created context menus.');
        });
    };

    /**
     * Context Menu Click Event
     * @param {*} info 
     * @param {*} tab 
     */
    this.contextMenuClick = function(info, tab) {
        if (!info.selectionText) {
            return false;
        }
        //
        info.selectionText = info.selectionText.toLowerCase();
        self.translate(info, tab);
    };

    /**
     * Translate
     * @param {*} info 
     * @param {*} tab 
     */
    this.translate = function(info, tab) {
        let wordUrl = 'https://api.shanbay.com/bdc/search/?word=' + info.selectionText;
        // 请求翻译
        this.module.common.request(wordUrl, {}, {}, function(response) {
            let explains = [], 
                audio = '', 
                phonetic = [];
            //
            if (response['status_code'] === 0) {
                let data = response['data'];
                explains = data['definition'].split('\n');
                audio = data['audio'];
                //
                for (let i = 0; i < data['pronunciations'].length; i++) {
                    phonetic.push({
                        t: i,
                        text: data['pronunciations'][i]
                    });
                }
            };
            //
            let sendData = {
                contextMenuId: info.menuItemId,
                info: info,
                translate: {
                    query: info.selectionText,
                    phonetic: phonetic,
                    explains: explains
                }
            };
            if (tab) {
                chrome.tabs.sendMessage(tab.id, sendData, function(response) {});
            } else {
                self.log('tab is undefined.');
            }
        });
    };
});