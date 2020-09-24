$(document).ready(function() {
    window.sessionStorage;
    if (sessionStorage.getItem("Auth") == "Ok" && sessionStorage.getItem("Type") == "Student") {
        alert("You are already Logged In");
        location.href = "Home.html";
    } else {

    }

    var split;
    var url = "https://localhost:44390/api/";

    $("#btnLogin").click(function() {
        validation();
    });


    function validation() {

        var email = $("#uname").val();

        var password = $("#password").val();
        $.ajax({
            type: 'GET',
            url: "https://localhost:44390/api/Authentication",
            datatype: 'json',
            headers: {
                Authorization: 'Basic ' + btoa(email + ':' + password)
            },
            success: function(data) {


                for (let i = 0; i < data.length; i++) {

                    if (data[i].Email == email) {
                        var utype = data[i].Type;
                        var id = data[i].Id;

                        break;

                    } else {}
                };
                if (utype == "Admin") {

                } else if (utype == "Teacher") {

                } else {
                    sessionStorage.setItem("Auth", "Ok");
                    sessionStorage.setItem("Token", btoa(email + ':' + password));
                    sessionStorage.setItem("href", "Home.html");
                    sessionStorage.setItem("Type", utype);
                    sessionStorage.setItem("Id", id);


                    location.href = "Home.html"
                }

            },
            error: function(data) {
                alert("Wrong Credentials");
            }
        });
    }


});