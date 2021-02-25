// brings the text entered from last 
// use onto the page when loaded
renderInputs();

// displays current day
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var currentHr = moment().format('HH');
console.log(currentHr);

function colorCoordinate() {
   
    $(".textarea").each(function(index) {
        var hour = $(this).attr("value");

    if(hour === currentHr) {
        $(this).addClass("present");
    }
    else if(hour < currentHr) {
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
});
}
colorCoordinate();

$(document).ready(function() {
    
    $("#saveButton9").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input9', input);
     })

     $("#saveButton10").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input10', input);
     })
     $("#saveButton11").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input11', input);
     })
     $("#saveButton12").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input12', input);
     })
     $("#saveButton13").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input13', input);
     })
     $("#saveButton14").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input', input);
     })
     $("#saveButton15").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input15', input);
     })
     $("#saveButton16").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input16', input);
     })
     $("#saveButton17").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input17', input);
     })
     $("#saveButton18").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        localStorage.setItem('input18', input);
     })

})

function renderInputs () {
    $("#hour-9").val(localStorage.getItem('input9'));
    $("#hour-10").val(localStorage.getItem('input10'));
    $("#hour-11").val(localStorage.getItem('input11'));
    $("#hour-12").val(localStorage.getItem('input12'));
    $("#hour-13").val(localStorage.getItem('input13'));
    $("#hour-14").val(localStorage.getItem('input14'));
    $("#hour-15").val(localStorage.getItem('input15'));
    $("#hour-16").val(localStorage.getItem('input16'));
    $("#hour-17").val(localStorage.getItem('input17'));
    $("#hour-18").val(localStorage.getItem('input18'));

};
