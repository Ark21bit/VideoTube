
$(".overlay").click(function (e) {     
    $(".modal").hide();    
    $(".overlay").hide();    
});

$(".close_modal").click(function (e) {     
    $(".close_modal").parent().hide();    
    $(".overlay").hide();    
});

$("#modal2").click(function (e) {     
    $("#autorization").show();    
    $(".overlay").show();    
});

$("#modal1").click(function (e) {     
    $("#reg").show();    
    $(".overlay").show();    
});