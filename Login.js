$(document).ready(function() {
    window.sessionStorage;

    var split;
    var url = "https://localhost:44390/api/";

    $("#btnLogin").click(function() {
        alert('baal');
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
                        break;

                    } else {}
                };
                if (utype == "Admin") {

                } else if (utype == "Teacher") {

                } else {
                    location.href = "Home.html"
                }

            },
            error: function(data) {
                alert("Unauthorized");
            }
        });
    }


});