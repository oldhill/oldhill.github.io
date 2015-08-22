// Converts input base-10 numbers to hex. Requires jQuery.

// TODO make this work with "enter" keypress as well as clicking submit button

$(document).on('ready', function() {

  $('#submitToHex').click(function() {

    // Clear results
    $('#tohex-results').empty();

    // Grab input and set default to '15'
    var input = $("#inputNumber").val()
    if (input === "") {
      input = '15';
    }

    // Parse input string into a (base 10) number, then convert this into a
    // hex (base 16) representation of itself. Also prepend that "0x" bc why not.
    $("#tohex-results").append('<br>0x' + parseInt(input, 10).toString(16) + '</br>');

  })
})
