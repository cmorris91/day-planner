
// displays current day
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$(document).ready(function() {

    $(".saveBtn").on('click', function() {
        var input = $(this).siblings(".textarea").val();
        console.log(input);
        localStorage.setItem('input', input);
     })

     function timeUpdater() {
        var currentTime = moment().format("hh:mm:ss");
        
     }
     
   

})