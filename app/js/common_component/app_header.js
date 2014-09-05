/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */
define(['knockout','text!./common_component_template/app_header.tmpl.html'], function(ko,tmpl) {
    ko.components.register(
        "app-header",
        {
            viewModel: function () {
                var self = this;
                self.isLocalUser = ko.observable(true);
                self.logout = function() {
                    console.log("Logout clicked");
                }
            },
            template: tmpl
        }
    );
});
