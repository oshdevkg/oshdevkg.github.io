let dataTable1 = $('#dataTable1').DataTable();
let dataTable2 = $('#dataTable2').DataTable();
let dataTable3 = $('#dataTable3').DataTable();
$('#dataTable4').DataTable();
$('#dataTable5').DataTable();

function filter(table) {
  table.columns().flatten().each( function ( colIdx ) {
    var select = $('<select />')
        .appendTo(
            table.column(colIdx).footer()
        )
        .on( 'change', function () {
            table
                .column( colIdx )
                .search( $(this).val() )
                .draw();
        } );
 
    table
        .column( colIdx )
        .cache( 'search' )
        .sort()
        .unique()
        .each( function ( d ) {
            select.append( $('<option value="'+d+'">'+d+'</option>') );
        } );
} );
}

filter(dataTable1);
filter(dataTable2);
filter(dataTable3);