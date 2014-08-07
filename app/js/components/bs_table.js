/**
 * Created by xin.h.li@oracle.com on 8/7/14.
 */
define(['knockout','text!./bs_table.tmpl.html','./bs_table_header_cell'], function(ko, tmpl){
    ko.components.register(
        "bs-table",
        {
            viewModel: function (data) {
                this.tb_header = ['First Name','Last Name','Age'];
                this.th_formater = [function(col_text){
                    return '<div class="btn btn-info">'+col_text+'</div>';
                }];
                this.tb_data = [
                    ['Alex','Lee','30'],
                    ['Alex','Lee','30'],
                    ['Alex','Lee','30']
                ];
                this.tb_footer = [];
            },
            template: tmpl
        }
    );
});
