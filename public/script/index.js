// Global variables for 

var THISTRACK = '1ZA17A561356683527';
var THISCAR = 'ups';

// var red = "red";
// var green = "green";
// var yellow = "yellow";


// GET Request - pulling data from Main Table
$(document).ready(function () {

    var table = $('#mainTable').DataTable({

        dom: 'Bfrtip',
        buttons: [
            {
                text: 'Import',
                className: '',
                // action: function (e, dt, node, conf) {
                //     console.log('Button 1 clicked on');
            },

            {
                text: 'Export',
                className: 'export',
                // action: function (e, dt, node, conf) {
                //     document.getElementsByClassName('buttonsToHide').style.visibility = "visible";
                //     console.log('Export Button clicked');
                // },
            },

            {
                text: 'Copy & Paste',
                className: 'buttonsToHide',

            },
            {
                extend: 'excel',
                text: 'Excel',
                className: 'export_buttons, buttonsToHide',
                filename: 'so_export_' + moment(new Date()).format("DD_MM_YYYY"),
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6, 7],
                    modifier: {
                        page: 'all'
                    }
                }
            },
            {
                extend: 'csv',
                text: 'CSV',
                className: 'export_buttons buttonsToHide',
                filename: 'so_export_' + moment(new Date()).format("DD_MM_YYYY"),
                exportOptions: {
                    modifier: {
                        page: 'all'
                    }
                }
            },
            {
                extend: 'pdf',
                text: 'PDF',
                className: 'export_buttons buttonsToHide',
                filename: 'so_export_' + moment(new Date()).format("DD_MM_YYYY"),
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                extend: 'print',
                text: 'Print',
                className: 'export_buttons buttonsToHide',
                filename: 'so_export_' + moment(new Date()).format("DD_MM_YYYY"),
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                text: 'Copy',
                className: 'copy, buttonsToHide',
            },
            {
                text: 'Delete',
                className: 'delete',
            },
        ],

        // Controls Pagination //
        "pagingType": "simple_numbers",

        // "aLengthMenu": [[25, 50, 75, -1], [25, 50, 75, "All"]],  

        // Controls the Number of Entries Per Page
        // "pageLength": 25,

        // "paging":   false,
        "ordering": false,
        "info": false,

        "ajax": {
            "url": "http://localhost:8080/api/tracking",
            "method": "GET",
            "dataSrc": "",
            "dataType": "json",
            // "data" : "data[0]",
            // "success" : function (a) {
            //     console.log(a[0]);
            // },
        },

        "columns": [
            {
                // Col 1 - Checkbox
                "data": "null",
                "render": function () {
                    return '<input type="checkbox" class="pleaseCheck">'
                }
            },
            {
                // Col 2 - Shipment Status
                "data": "description", // <-- Replace with shipment status //
                "render": function (data, type, row, meta) {
                    // Create conditional based on what the shipment status is
                    // ie: if in transit set color to green variable
                    if (data === "Delivered" || data === "Out For Delivery Today") {
                        return '<i class="fas fa-circle" style="color: green;"></i> <span>' + data + '</span>'
                    }
                    else if (data === "Destination Scan") {
                        return '<i class="fas fa-circle" style="color: orange;"></i> <span>' + data + '</span>'
                    }
                    else
                        return '<i class="fas fa-circle" style="color: red;"></i> <span>' + data + '</span>'
                },
            },
            {   // Col 3 - Carrier / Carrier Icon
                "data": "carrier_code",
                "render": function (data, type, row, meta) {
                    // this will assign 
                    // need conditional if data does not show then show text
                    // how to mke sort work for icons???
                    // var data = "FEDEX"; // Remove this when you have data coming through
                    var newData = data.toLowerCase();
                    return '<i class="fab fa-3x fa-' + newData + '"></i>'
                    console.log('Lower case: ', newData);
                    // console.log('Regular case: ', data);
                }
            },
            // // {
            // //     // Col 4 - Shipment Method
            // //     "data": "null",
            // //     "render": function (data, type, row, meta) {
            // //         // ie return full["tracking_number_1"], full["tracking_number_2"];

            // //         return '<span>Fedex Ground<br> Home Delivery</span>'
            // //     },
            // // },
            {   // Col 5 - Tracking Number
                "data": "tracking_number",
                // "render": function (data, type, row, meta) {
                //     var t = table.rows().data();
                //     t.each(function (value, index) {
                //         console.log(`For index ${JSON.stringify(index)}, data value is ${value}`);
                //     });
                // },
            },
            {
                // Col 6 - Origin Information
                "data": { "ship_date": "ship_date", "city_locality": "city_locality", "state_province": "state_province", "postal_code": "postal_code" },
                "render": function (data, type, row, meta) {
                    // Convert epoch unix time to Js date and time
                    var timestamp = new Date(data.ship_date);
                    var lowercaseCity = data.city_locality.toLowerCase();

                    return "<span class='origin-information'>" + lowercaseCity + ", " + data.state_province + '</span><br>' + timestamp.toLocaleString([], { month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
                },
            },
            {
                // Col 7 - Latest Information
                "data": { "ship_date": "ship_date", "city_locality": "city_locality", "state_province": "state_province", "postal_code": "postal_code" },
                "render": function (data, type, row, meta) {
                    // Convert epoch unix time to Js date and time
                    var timestamp = new Date(data.ship_date);
                    var lowercaseCity = data.city_locality.toLowerCase();

                    return "<span class='origin-information'>" + lowercaseCity + ", " + data.state_province + '</span><br>' + timestamp.toLocaleString([], { month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
                },
            },
            {
                // Col 8 - Oversight
                "data": "null",
                "render": function (data, type, row, meta) {
                    return '<span>Working...</span>'
                },
            },
            {
                // Col 9 - Last Update / GET Request
                "data": "company_name"
            },
        ],

        // Controls what rows appear in the table
        // Should only show the most recent tracking information
        "rowCallback": function (row, data, index) {
            if (data.events >= 1) {
                $('td', row).remove();
            }
            // else if ($(this).on('click', 'tr')) {
            //     alert('Yup');
            //     // $('body').on('click', 'tr', function () {
            // }
        }
    });

    //NOT WORKING - Count All Data.Events[0]
    // var countRows = $(data.events[0]).length;
    // console.log('Number of rows in table = ', countRows);


    // Select Multiple Rows By Clicking On Them //
    // $('#mainTable tbody').on( 'click', 'tr', function () {
    //     $(this).toggleClass('selected');
    // } );

    // // Assign button ID to correct button //
    // $('#button').click( function () {
    //     // When you click a button this will occurr //
    //     // This will count the number of rows //
    //     alert( table.rows('.selected').data().length +' row(s) selected' );
    // })

    // Select Single Row and Delete Highlightd Row
    // Q1: Does not delete from DB. Need to build Delete request.
    // Q2: Can we extend to select mulitple rows?
    $('#mainTable tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    // When you click the Select All button all checkboxes are checked / unchecked //
    $('body').on('click', '#selectAll', function () {
        if ($(this).hasClass('pleaseCheck')) {
            $('input[type="checkbox"]', '#mainTable').prop('checked', false);
        } else {
            $('input[type="checkbox"]', '#mainTable').prop('checked', true);
        }
        $(this).toggleClass('pleaseCheck');
    })

    // When you click the delete button remove this row
    // Q1: How to modify that when you click a checkbox and click delete the row is removed
    $('#delete').click(function () {
        table.row('.selected').remove().draw(false);
    });

});