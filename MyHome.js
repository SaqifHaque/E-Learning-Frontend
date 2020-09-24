$(document).ready(function() {
    window.sessionStorage;

    $.ajax({
        type: 'GET',
        url: "https://localhost:44390/api/Home",
        datatype: 'json',
        headers: {
            Authorization: 'Basic ' + sessionStorage.getItem("Token")
        },
        success: function(data) {

            let cardContainer = document.getElementById("card");

            for (var i = 0; i < data.length; i++) {


                let card = document.createElement("div");
                card.classList.add("col-lg-3", "col-md-6", "mb-2");

                let cardContent = document.createElement('div');
                cardContent.classList.add("card", "h-100");

                let cardImg = document.createElement('img');
                cardImg.classList.add("card-img-top");
                cardImg.src = "http://placehold.it/500x325";
                cardImg.alt = "";

                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                let title = document.createElement("h4");
                title.classList.add("card-title");
                title.innerText = data[i].C_Name;

                let description = document.createElement("p");
                description.classList.add("card-text");
                description.innerText = data[i].C_Description;

                let footer = document.createElement('div');
                footer.classList.add("card-footer");

                // let btn = document.createElement("a");
                // btn.classList.add("btn", "btn-warning");
                // btn.href = "CourseDetails.html?x`/" + data[i].C_Id;
                // // btn.onclick = function() { getCourseDetails(data[i].C_Id) };
                // btn.innerText = "Details";

                cardContainer.appendChild(card);

                card.appendChild(cardContent);

                cardContent.appendChild(cardImg);
                cardContent.appendChild(cardBody);
                cardContent.appendChild(footer);

                cardBody.appendChild(title);
                cardBody.appendChild(description);

                if (sessionStorage.getItem("Auth") != "Ok") {
                    let btn = document.createElement("a");
                    btn.classList.add("btn", "btn-warning");
                    btn.href = "CourseDetails.html?x`/" + data[i].C_Id;
                    // btn.onclick = function() { getCourseDetails(data[i].C_Id) };
                    btn.innerText = "Details";
                    footer.appendChild(btn);

                } else if (sessionStorage.getItem("Auth") == "Ok" && sessionStorage.getItem("Type") == "Student") {
                    let btn = document.createElement("a");
                    btn.classList.add("btn", "btn-warning");
                    btn.href = "CourseDetails.html?/" + data[i].C_Id;
                    btn.innerText = "Course Details";
                    footer.appendChild(btn);

                }
            }

        },
        error: function(data) {
            location.href = "Login.html";

        }
    });



});