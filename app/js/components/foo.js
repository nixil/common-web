/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */
define(['knockout'], function(ko) {
    ko.components.register(
        "foo",
        {
            viewModel: function (data) {
                this.name = (data && data.name) || "none";
            },
            template: '<div>Hello</div>'
        }
    );
});
