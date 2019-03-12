const url = "http://localhost:53058/api/";

$().ready(
    function(){console.log("Everything is Awesome");

    $.getJSON(url + "users")
        .done(function(resp){
            console.log(resp);
            display(resp);
        });
});




function display(users){
    //
    var list = document.getElementById("grid")
    list.innerHTML= "";
    for(var user of users){
        var divrow = '<div class="row">';
    divrow += '<div class="col-sm">'+ user.id+'</div>';
    divrow += '<div class="col-sm text-left text-nowrap">'+ user.firstName+" "+ user.lastName+'</div>';
    divrow += '<div class="col-sm text-center">'+ user.username+'</div>';
    divrow += '<div class="col-sm text-center">'+ user.password+'</div>';
    divrow += '<div class="col-sm text-center">'+ user.email+'</div>';
    divrow += '<div class="col-sm text-center text-nowrap ">'+ user.phone+'</div>';
    divrow += '<div class="col-sm text-center">'+ user.isActive+'</div>';
    divrow += '<div class="col-sm text-center">'+ user.isAdmin+'</div>';
    divrow += '<div class="col-sm text-center">'+ user.isReviewer+'</div>';
    //divrow += '<td><a href="">Detail</a> | <a href=""

    list.innerHTML+= divrow;   
    //$("grid").append(divrow);
    }


}
