modules.define('highlight', function(provide) {var hljs = new /*borschik:include:../../libs/highlight.js/src/highlight.js*/;hljs.LANGUAGES['css'] = /*borschik:include:../../libs/highlight.js/src/languages/css.js*/(hljs);hljs.LANGUAGES['javascript'] = /*borschik:include:../../libs/highlight.js/src/languages/javascript.js*/(hljs);hljs.LANGUAGES['xml'] = /*borschik:include:../../libs/highlight.js/src/languages/xml.js*/(hljs);provide(hljs);});