define(['jquery', 'knockout', 'acs-nav', 'modules/common/user',
        // if your application does not use DVT components,
        // remove the references below to improve performance
        //'ojs/ojmodel',
        //'ojs/ojcore',
        //'ojs/ojknockout',
        //'ojs/ojknockout-model',
        //'ojs/ojchart',
        //'ojs/ojgauge',
        //'ojs/ojlegend',
        //'ojs/ojsunburst',
        //'ojs/ojthematicmap',
        //'ojs/ojtreemap',
        //'ojs/ojcomponents',
        'modules/common/ko-validation-util',
        'jqueryui'],


    function ($, ko, acs_nav, user) {

        var self = this;

        console.log("define global template object, initialize to login...");
        self.user = user;

        self.logout = function() {
            $.ajax({
                type: 'GET',
                url: "rest/userservice/user_logout",
                dataType: "json", // data type of response
                contentType: "application/json; charset=utf-8"
            });

            user.userLoggedIn(false);
            user.userName(null);
            user.userId(null);

            window.location.href = "login.html";
        };

        self.isLocalUser = function() {
            return user.userType() > 0;
        };

        /**
         * template object for severing the global template in index.html's #mainContent
         * since it's observable, any change to this data will trigger the template to be rerendered
         */
        self.TemplateHolder = function (template, data, animation) {
            var that = this;
            that.pageTemplate = template;
            that.templateData = data;
            that.afterRender = undefined;
            that.animation = animation;

            that.doPostRenderLogic = function (element) {
                if (that.animation !== 'disabled') {
                    $(element).hide();
                    if (that.animation === 'slide')
                        $(element).show("slide", { direction: "right" }, 300);
                    else
                        $(element).fadeIn();
                }
                if (that.afterRender && typeof that.afterRender === 'function') {
                    that.afterRender();
                }
            };
        };
        self.template = ko.observable(new TemplateHolder());


        /**
         * Object for holding menu data, that is generated from routing data
         */
        function NavigationMenu() {
            //helper method for creating the multilevel menu data structure
            function insertMenuItem(menu, item) {
                if (item.menu.indexOf('|') < 0) {
                    menu.push({
                        url: item.path,
                        menuText: item.menu,
                        submenus: [],
                        icon: item.icon
                    });
                } else {
                    var menuStr = item.menu.split('|');
                    var menuName = menuStr[0].trim();
                    var menuItem = findMenuItem(menu, menuName);
                    if (!menuItem) {
                        menuItem = {
                            url: item.path,
                            menuText: menuName,
                            submenus: [],
                            icon: item.icon
                        };
                        menu.push(menuItem);
                    }

                    item.menu = item.menu.substring(item.menu.indexOf('|') + 1).trim();
                    insertMenuItem(menuItem.submenus, item);
                }
            }

            //helper method for creating the multilevel menu data structure
            function findMenuItem(menu, name) {
                var foundItem = null;
                $.each(menu, function (idx, item) {
                    if (item.menuText === name) {
                        foundItem = item;
                        return foundItem;
                    }
                });

                return foundItem;
            }


            //data array for holding the menu
            this.menuItems = [];

            this.menuItems = [
                {
                    url: '#',
                    menuText: 'Developer Guide',
                    submenus: [
                        {
                            url: '#/developer/style_guide',
                            menuText: 'Style Guide',
                            icon:'fa fa-site',
                            submenus:[]
                        },
                        {
                            url: '#/developer/simple_component',
                            menuText: 'Simple Component',
                            icon:'fa fa-site',
                            submenus:[]
                        }
                    ],
                    icon:'fa fa-site'
                }];

            //method called by the routes.js for creating the menu
            this.generateMenu = function (routingTable) {
                var menuList = [];
                $.each(routingTable, function (idx, item) {
                    if (item.menu) {
                        insertMenuItem(menuList, item);
                    }
                });

                this.menuItems = menuList;
            };

            //method for styling the menu on the page, called after the template is rendered
            this.initMenu = function () {
                acs_nav.initNavigationMenu();
            };
        }


        self.nagivationMenu = new NavigationMenu();

        /* sample data for menu structure
         self.menuItems = ko.observableArray([
         {
         url: '#/myservices',
         menuText: 'My Services',
         submenus: []
         },
         {
         url: '#/monitors/sads',
         menuText: 'Monitors',
         submenus: [
         {
         url: '#/monitors/sads',
         menuText: 'Service Access Definitions',
         submenus: []
         },
         {
         url: '/monitors/probes',
         menuText: 'Probes',
         submenus: []
         }
         ]
         },
         {
         url: '/monitors/probes',
         menuText: 'Other Monitors',
         submenus: [
         {
         url: '/monitors/probes',
         menuText: 'Probes',
         submenus: []
         },
         {
         url: '/monitors/probes',
         menuText: 'Probes',
         submenus: [
         {
         url: '#/monitors/sads',
         menuText: 'Service Access Definitions',
         submenus: []
         },
         {
         url: '/monitors/probes',
         menuText: 'Probes',
         submenus: []
         }
         ]
         }
         ]
         }
         ]);*/

        return self;
    });