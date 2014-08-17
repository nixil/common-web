/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */
/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */
define(['knockout','text!./acs_templates/app_footer.tmpl.html'], function(ko,tmpl) {
    ko.components.register(
        "app-footer",
        {
            viewModel: function () {},
            template: tmpl
        }
    );
});
