/* jshint node:true */
/* global MAKE */

var environ = require('bem-environ')(__dirname);
environ.extendMake(MAKE);

//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-core @ f4b46ef0590549042d938f7e981df4d14eb4caef',
        'bem-components @ 82301a8af6c15c2849d1f755a24f594de6522251'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'browser.js+bemhtml',
            'less',
            'ie.css',
            'html'
        ];

    },

    getForkedTechs : function() {
        return this.__base().concat(['browser.js+bemhtml', 'less']);
    },

    'create-less-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this['create-css-optimizer-node'].apply(this, arguments);
    },

    'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);
    }

});
