$("#btn-factory").click(function () { 
        $("#factory").toggle(1000);
        $("#sport-ground").hide(500);
        $("#campus").hide(500);
        
    });
$("#btn-sport-ground").click(function() {
    $("#sport-ground").toggle(1000);
    $("#campus").hide(500);
    $("#factory").hide(500)
})
$("#btn-campus").click(function() {
    $("#campus").toggle(1000);
    $("#factory").hide(500);
    $("#sport-ground").hide(500);
})
