/**
 * Require.js boostrap javascript
 */

//

requirejs.config({

    urlArgs: "v3.8",
    // Path mappings for the logical module names
    paths: {
        'knockout': 'lib/knockout/knockout',
        'knockout.global': 'lib/knockout/knockout.global',
        'knockout-validation': 'lib/knockout/knockout.validation',
        'bootstrap-file-upload': 'lib/bootstrap/bootstrap.file-input',
        //'knockout-validation': 'https://rawgithub.com/ericmbarnard/Knockout-Validation/master/Src/knockout.validation',
        'jquery': 'lib/jquery/jquery-1.11.0',
        'jqueryui': 'lib/jquery/jquery-ui-1.10.4.custom.min',
        'bootstrap': 'lib/bootstrap/bootstrap.min',
        'text': 'lib/require/text',
        'koext': 'lib/koexternaltemplateengine/koExternalTemplateEngine_all',
        'sammy': 'lib/sammy/sammy-min',
        'ojs': 'lib/oj/v1.0/min',
        'ojL10n': 'lib/oj/v1.0/ojL10n',
        'ojtranslations': 'lib/oj/v1.0/resources',
        'chart-util': 'modules/common/chart-util',
        'sql-service': 'modules/common/sql-service',
//        'clipboard': 'lib/zeroclipboard/ZeroClipboard',
        'date-picker': 'lib/datepicker/bootstrap-datetimepicker',
        'date-util': 'modules/common/date-util',
        'moment': 'lib/moment/moment.min',
        'moment-timezone': 'lib/moment/moment-timezone',
        'moment-timezone-data': 'lib/moment/moment-timezone-data',
        'kogrid': 'lib/kogrid/koGrid-2.1.1',

        //these are javascript code for styling need
        'metismenu': 'lib/metisMenu/jquery.metisMenu',
        'acs-nav': 'lib/acs/acs-nav',
        'retina': 'lib/retina/retina-1.1.0.min',
        'pnotify': 'lib/pnotify/pnotify.custom',    
        'google-code-prettify': 'lib/prettify/prettify',
        'prettify-sql': 'lib/prettify/lang-sql'
    },

    // Shim configurations for modules that do not expose AMD
    shim: {
        'koext': {
            deps: ['jquery', 'knockout', 'knockout.global']
        },
        'jquery': {
            exports: ['jQuery', '$']
        },
        'jqueryui': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'sammy': {
            deps: ["jquery"],
            exports: "Sammy"
        },
//        'clipboard': {
//            deps: ["jquery"],
//            exports: "ZeroClipboard"
//        },
        'date-picker': {
            deps: ['jquery']
        },
        'prettify-sql': {
            deps: ['google-code-prettify'],
            exports: 'prettify-sql'
        },
        'retina': {
        },
        'kogrid': {
            deps: ['jquery']
        }
    },

    map: {
        '*': {'knockout': 'knockout.global'}, // All modules referencing 'knockout' will be loading 'knockout.global'
        'knockout.global': {'knockout': 'knockout'} // 'knockout.global' itself will be referencing the original 'knockout'
    },

    wrapShim: true
});


//load the onresourceload.js before any other module to
//hook into the requirejs loading event
//require(['modules/common/onresourceload'], function () {

    /**
     * A top-level require call executed by the Application.
     */
    require(['modules/common/onresourceload',
            'knockout',
            'knockout.global',
            'routes',
            'app',
            'modules/common/user-validation',
            'koext',
            'bootstrap',
            'modules/common/httputils',
            'retina',
            'kogrid',
            'components/components'],


        // this callback gets executed when all required modules are loaded
        function (ignore, ko, ignore2, routes, app, validation) {
            /**
             * configure the external template engine to load template file from '/templates' folder
             */
            infuser.defaults.templateUrl = "templates";
            infuser.defaults.templateSuffix = ".tmpl.html?" + "v3.8";

            function DummyViewModel () {
                var self = this;
                self.menuItems = [
                    {
                        url: '#',
                        menuText: 'Developer Guide',
                        submenus: [
                            {
                                url: '#/developer/style_guide',
                                menuText: 'Style Guide',
                                icon: 'fa fa-site',
                                submenus: []
                            },
                            {
                                url: '#/developer/simple_component',
                                menuText: 'Simple Component Ag',
                                icon: 'fa fa-site',
                                submenus: []
                            }
                        ],
                        icon: 'fa fa-site'
                    }
                ];
                return self;
            }

            /* apply templates */
            $(document).ready(function () {
                ko.validation.registerExtenders();
                ko.applyBindings(new DummyViewModel(), document.getElementById('wrapper'));
//                ko.applyBindings(app.template, document.getElementById('mainContent'));
            });

        }
    );

//});


