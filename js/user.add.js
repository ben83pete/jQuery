const url = "http://localhost:53058/api/";

var user ={
    id:0,
    username:"test",
    password:"test",
    firstName:"test",
    lastName:"test",
    email:"test@email.com",
    phone:"513-123-4567",
    isReviewer: true,
    isAdmin: false,
    isActive: true
};

$().ready(
    function(){
        console.log("Awaiting command");

        $.ajax({
            method: "POST",
            url: url + "users",
            data: JSON.stringify(user),
            content: "json",
            contentType: "application/json"
        })
            .done(function(resp){
                console.log(resp);
                getAllUsers();
            });
});

function getAllUsers(){
    $.getJSON(url + "users")
    .done(function(resp){
        console.log(resp);
    });
}
