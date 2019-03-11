

$().ready(function(){

    console.log("Everything is Awesome!");
    
    $("p").css("color","blue").css("font-size", "1.5em");

    $("button").click(function(){
        $("p").css("background-color","red").css("color", "white");
        $("input").val("change the default");
    });
    $("label").text("The Input Control is Next.");
    

});