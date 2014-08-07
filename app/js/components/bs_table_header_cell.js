/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */
define(['knockout','text!./bs_table_header_cell.tmpl.html'], function(ko, tmpl){
    ko.components.register(
        "bs-table-header-cell",
        {
            viewModel: function (data) {
                this.label = data.label || '';
            },
            template: tmpl
        }
    );
});
