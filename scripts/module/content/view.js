/**
 * Content View
 */
App.view.extend('content', function() {

    /**
     * 翻译结果弹窗
     */
    this.translate = function() {
        return `
            <div class="spinxs spin-mask" id="translate-js-mask"></div>
            <div id="translate-container" class="spinxs spin-translate">
                <div class="spinxs spin-translate-inner" id="spin-js-translate-inner">
                    <div class="spinxs spin-translate-title">{{ data['query'] }}</div>
                    <div class="spinxs spin-translate-phonetic">
                    {{ for var i in data['phonetic'] }}
                        {{ var type = data['phonetic'][i]['t'] }}
                        {{ var text = data['phonetic'][i]['text'] }}
                        {{ if type }}
                            <span>{{ type }} [{{ text }}]</span>
                        {{ else }}
                            <span>[{{ text }}]</span>
                        {{ end }}
                    {{ end }}
                    </div>
                    <div class="spinxs spin-translate-explains">
                        {{ for var i in data['explains'] }}
                        <div>{{ data['explains'][i] }}</div>
                        {{ end }}
                    </div>
                    <!--
                    <ul class="spinxs spin-translate-explains">
                        {{ for var i in data['explains'] }}
                        <li>{{ data['explains'][i] }}</li>
                        {{ end }}
                    </ul>
                    -->
                </div>
            </div>
        `;
    }
});