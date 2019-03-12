const url = "http://localhost:53058/api/";

$().ready(
    function(){console.log("Everything is Awesome");

    //$.getJSON(`{url}user/5`)
    $.getJSON(url + "users/5")
        .done(function(resp){
                console.log(resp);
            user = resp;        
            display();
        });

});

function display(){
    $("#id").text(user.id);
    $("#user").text(user.username);
    $("#name").text(user.firstName + "" + user.lastName);
    $("#email").text(user.email);
    $("#phone").text(user.phone);
    $("#admin").text(user.isAdmin);
    $("#reviewer").text(user.isReviewer);

}
