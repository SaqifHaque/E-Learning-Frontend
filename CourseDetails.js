$(document).ready(function() {
    url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);
    $.ajax({
        url: "https://localhost:44390/api/Home/" + id,
        method: "GET",
        complete: function(xhttp, status) {
            if (xhttp.status == 200) {
                var data = xhttp.responseJSON;
                let course = document.getElementById("course");

                let name = document.createElement("h1");
                name.classList.add("mb-0");
                name.innerText = data.C_Name;

                let body = document.createElement("div");
                body.classList.add("mb-5");

                let category = document.createElement("p");
                category.classList.add("lead", "mb-3");
                category.innerText = "";

                let description = document.createElement("p");
                description.innerText = data.C_Description;

                course.appendChild(name);
                course.appendChild(body);
                body.appendChild(category);
                body.appendChild(description);


            } else {
                console.log(xhttp.status + ":" + xhttp.statusText);
            }
        }
    });
});