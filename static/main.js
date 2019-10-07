// toggle
$(document).ready(function(){
  $("#toggle-button1").addClass("active");
  $(".tri-state-toggle-button").click(function(){
    $(".tri-state-toggle-button").removeClass("active");
    var id = $(this).attr('id');
    $("#" + id).addClass("active");
  });
});

  
// Shared function
function push (feature, data, callback) {
    $.ajax({
        'url': './' + feature,
        'method': 'POST',
        'contentType': 'application/json',
        'data': JSON.stringify(data),
    }).done(function (msg) {
        console.log('Successed: '+ msg);
        $('#message').text('Successed: '+ msg);
    }).fail(function (msg) {
        console.log('failed: '+ msg.status +','+ msg.responseText);
        $('#message').text('failed: '+ msg.status +','+ msg.responseText);
    }).always(function() {
        if(typeof callback === 'function')
            callback();
    });
}


$(function () {
    console.log('YA');
});
