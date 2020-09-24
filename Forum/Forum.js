$(document).ready(function() {
    window.sessionStorage;
    // if (sessionStorage.getItem("Auth") != "Ok") {
    //     location.href = "Login.html";
    // }
    $.ajax({
        type: 'GET',
        url: "https://localhost:44390/api/Forum",
        datatype: 'json',
        headers: {
            Authorization: 'Basic ' + sessionStorage.getItem("Token")
        },
        success: function(data) {
            let maindiv = document.getElementById("pro");
            for (let i = 0; i < data.length; i++) {

                let post = document.createElement("div");
                post.classList.add("bg-secondary", "text-white", "rounded", "p-2");

                let sptype = document.createElement("span");
                if (data[i].User.Type == "Student") {
                    sptype.classList.add("badge", "badge-primary", "border-round");
                    sptype.innerHTML = "Student";
                } else if (data[i].User.Type == "Teacher") {
                    sptype.classList.add("badge", "badge-danger", "border-round");
                    sptype.innerHTML = "Instructor";
                } else {
                    sptype.classList.add("badge", "badge-danger", "border-round");
                    sptype.innerHTML = "Instructor";
                }


                let spname = document.createElement("span");
                spname.classList.add("font-weight-bold");

                let p = document.createElement("p");
                p.classList.add("mt-2");
                p.innerText = data[i].PostDetails;

                let btnEdit = document.createElement("button");
                btnEdit.classList.add("btn", "btn-info");
                btnEdit.innerText = "Edit";

                let btnDelete = document.createElement("button");
                btnDelete.classList.add("btn", "btn-danger");
                btnDelete.innerText = "Delete";

                let br = document.createElement('br');

                maindiv.appendChild(post);
                post.appendChild(sptype);
                post.appendChild(spname);
                post.appendChild(p);
                if (sessionStorage.getItem("Id") == data[i].User.Id) {
                    post.appendChild(btnEdit);
                    post.appendChild(btnDelete);
                }
                post.appendChild(br);
                post.appendChild(br);



                for (let j = 0; j < data[i].Comments.length; j++) {

                    let comment = document.createElement("div");
                    comment.style = "margin-left: 2em;";

                    let spcom = document.createElement("span");
                    spcom.classList.add("badge", "badge-info", "border-round");
                    spcom.innerText = "Comment";


                    let comtype = document.createElement("span");
                    comtype.classList.add("font-weight-bold");
                    comtype.innerText = data[i].Comments[j].Uname;

                    let pc = document.createElement("p");
                    pc.classList.add("mt-2");
                    pc.innerText = data[i].Comments[j].CommentDetails;

                    post.appendChild(comment);
                    comment.appendChild(spcom);
                    comment.appendChild(comtype);
                    comment.appendChild(pc);

                };
                maindiv.appendChild(br);
                let input = document.createElement("input");
                input.style = "width:90%;height:100%;";
                input.classList.add("margin-right:10");
                input.id = "commentDetails" + i;
                post.appendChild(input);
                let btnComment = document.createElement("button");
                btnComment.classList.add("btn", "btn-primary");
                btnComment.Type = "submit";
                btnComment.innerText = "Comment";
                btnComment.onclick = function() { createComment(data[i].PostId, i); };
                post.appendChild(btnComment);
                maindiv.appendChild(br);
                maindiv.appendChild(br);

            };

        },
        error: function(data) {
            alert("Wrong Credentials");
        }
    });

    $("#btnPost").click(function() {
        createPost();
    });

    function createPost() {
        $.ajax({
            url: "https://localhost:44390/api/Forum",
            method: "post",
            headers: {
                Authorization: 'Basic ' + sessionStorage.getItem("Token"),
                contentType: "application/json"
            },
            data: {
                PostDetails: $("#postDetails").val(),
                UserId: "1" //sessionStorage.getItem("Id")
            },

            success: function(data) {
                alert("Posted");
            },
            error: function(data) {
                alert("Something Went Wrong");
            }
        });
    };


    function createComment(pid, i) {
        $.ajax({
            url: "https://localhost:44390/api/Forum/" + pid + "/comments",
            method: "post",
            headers: {
                Authorization: 'Basic ' + sessionStorage.getItem("Token"),
                contentType: "application/json"
            },
            data: {
                CommentDetails: $("#commentDetails" + i).val(),
                Uname: "Hameem", //sessionStorage.getItem("Id")
                PostId: pid //sessionStorage.getItem("Id")
            },

            success: function(data) {
                alert("Comment Posted");
                location.href = "Forum.html";
            },
            error: function(data) {
                alert("Something Went Wrong");
            }
        });
    };






});