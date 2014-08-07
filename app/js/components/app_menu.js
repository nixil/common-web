/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */

define(['knockout','text!./app_menu.tmpl.html'],function(ko, tmpl) {

    ko.components.register(
        "app-menu",
        {
            viewModel: function (data) {
                this.menuItems = data && data.menuItems || [
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
                                menuText: 'Simple Component',
                                icon: 'fa fa-site',
                                submenus: []
                            }
                        ],
                        icon: 'fa fa-site'
                    }
                ];
            },
            template: tmpl
        }
    );

});
