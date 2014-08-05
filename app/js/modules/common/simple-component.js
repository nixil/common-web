/**
 * Created by matrix on 14-8-5. This is a test file.
 * todo delete me
 */
define('simple-component', ['knockout'], function(ko){
    ko.components.register("simple-name", {
        viewModel: function(data) {
            this.name = (data && data.name) || "none";
        },
        template: "<div data-bind=\"text: name\"></div>"
    });
});
