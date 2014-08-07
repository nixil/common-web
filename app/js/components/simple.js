/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */
/**
 * Created by matrix on 14-8-5. This is a test file.
 * todo delete me
 */
define(['knockout', 'text!/templates/component/simple.tmpl.html'], function (ko, tmpl) {

    ko.components.register(
        "simple-name",
        {
            viewModel: function (data) {
                this.name = (data && data.name) || "none";
            },
            template: tmpl
        }
    );
});



