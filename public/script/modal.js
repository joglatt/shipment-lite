// var script = document.createElement('script');
// script.src = '//code.jquery.com/jquery-3.3.1.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

var add_button = '<button onclick="AddTrackingCopyAndPaste()" >Add</button>'
var Input = '<input id="copy_and_paste" type="text" value=""></input>'

var modalTableCopyPaste = '<p>When you enter a tracking number and click add the numbers are saved (to a table) and the main table is updated</p><table id="modalTable" class="display modal-table" style="width:100%"><thead><tr><th>Original Tracking No.</th></tr></thead><tbody><tr><td>' + Input + '</td></tr></tbody></table>' + add_button

var modalTableImport = '<table id="modalTable" class="display modal-table" style="width:100%"><thead><tr><th></th><th>Original Tracking No.</th><th>Alt. Tracking No.</th><th>Order Number</th></tr></thead><tbody><tr><td><input type="checkbox" class="check-box"></td><td>784562738987</td><td></td><td>5551239432</td></tr><tr><td><input type="checkbox" class="check-box"></td><td>784562738987</td><td></td><td>5551239432</td></tr><tr><td><input type="checkbox" class="check-box"></td><td>784562738987</td><td></td><td>5551239432</td></tr><tr><td><input type="checkbox" class="check-box"></td><td>784562738987</td><td></td><td>5551239432</td></tr><tr><td><input type="checkbox" class="check-box"></td><td>784562738987</td><td></td><td>5551239432</td></tr><tr><td><input type="checkbox" class="check-box"></td><td>784562738987</td><td></td><td>5551239432</td></tr><tr><td><input type="checkbox" class="check-box"></td><td>784562738987</td><td></td><td>5551239432</td></tr></tbody></table><button>Upload File</button>'


function ModalFunction(clicked_value) {

    var modalValue = clicked_value;
    console.log('Modal Option', modalValue);

    if (modalValue === 'button_import') {
        // alert('Import Button Clicked');
        modalOption = modalTableImport;
    }
    else if (modalValue === 'button_paste') {
        // alert('Copy & Paste Button Clicked');
        modalOption = modalTableCopyPaste;
    };

    // Get ID where modal will appear and store in variable
    var modal = document.getElementById("showModal");
    console.log('Stored modal', modal);

    // If modal is set to 'display: none;' set to 'display: block;'
    if (modal.style.display === "none") {
        modal.style.display = "block";
    }
    else {
        //Add class to Checkout Button
        modal.className += " modal-style";
    }

    // Insert modal base html into HTML
    modal.innerHTML = '<div class="row"><div class="col-lg-12"><div class="row"><div class="col-lg-11"><!--<h2>I can see a modal</h2>--></div><div class="col-lg-1 text-right"><span onclick="RemoveModalFunction()" class="x-button">X</span></div></div><div class="row"><div class="col-lg-12">' + modalOption + '</div></div></div></div>';
}

function RemoveModalFunction() {

    // Get ID and store in variable
    var modal = document.getElementById("showModal");
    console.log('Stored modal', modal);

    modal.style.display = "none"
}

function AddTrackingCopyAndPaste() {

    // var options = {
    //     tracking_number
    // }
    // var copyandpaste = {
    //     tracking_number_1: document.getElementById("copy_and_paste").value,
    //     tracking_number_2: '321',
    //     carrier_name: 'Test Carrier'
    // };

    console.log("Tracking Number To Add ", options);

    // POST - Sends and saves information to copyandpaste_table
    $.ajax("/api/copyandpaste", {
        type: "POST",
        data: options,
        contentType: "application/x-www-form-urlencoded",
        success: function (post) {
            //    location.reload();
            console.log(post);
        }
        //    }).then(
        //        function (post) {
        //            console.log(post);
        // Reload the page to get the updated list
        //    location.reload();
    });
      
}
