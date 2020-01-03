// toggle
$(document).ready(function(){
  $("#toggle-button1").addClass("active");
  $(".tri-state-toggle-button1").click(function(){
    $(".tri-state-toggle-button1").removeClass("active");
    var id = $(this).attr('id');
    $("#" + id).addClass("active");
  });
});

$(document).ready(function(){
  $("#toggle-button4").addClass("active");
  $(".tri-state-toggle-button2").click(function(){
    $(".tri-state-toggle-button2").removeClass("active");
    var id = $(this).attr('id');
    $("#" + id).addClass("active");
  });
});

$(document).ready(function(){
  $("#toggle-button7").addClass("active");
  $(".tri-state-toggle-button3").click(function(){
    $(".tri-state-toggle-button3").removeClass("active");
    var id = $(this).attr('id');
    $("#" + id).addClass("active");
  });
});

$(document).ready(function(){
  $("#toggle-button10").addClass("active");
  $(".tri-state-toggle-button4").click(function(){
    $(".tri-state-toggle-button4").removeClass("active");
    var id = $(this).attr('id');
    $("#" + id).addClass("active");
  });
});

$(document).ready(function(){
  $("#toggle-button13").addClass("active");
  $(".tri-state-toggle-button5").click(function(){
    $(".tri-state-toggle-button5").removeClass("active");
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
