/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */
define(['knockout','text!./app_header.tmpl.html'], function(ko,tmpl) {
    ko.components.register(
        "app-header",
        {
            viewModel: function () {},
            template: tmpl
        }
    );
});
