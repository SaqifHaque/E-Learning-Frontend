$(document).ready(function() {
    var split;
    var splitComment;
    var sPost;
    var prefixPost = "http://localhost:14006/api/Posts/";


    $("#pra").click(function() {
        alert('baal');
        createPost();
    });


    //////////////////////////////////////////////////////////////////////////////////////Function//////////////////////////////




    $.ajax({
        url: prefixPost,
        method: "get",
        complete: function(xmlhttp, status) {

            if (xmlhttp.status == 200) {
                var data = xmlhttp.responseJSON;
                let newDiv = document.getElementById('pro');
                let newHeader;
                let newHeaderText;
                let newTextNode;
                let newTextInput;
                let lineBreak;
                let newButton;
                let editButton;
                let deleteButton;
                for (let i = 0; i < data.length; i++) {
                    // create the container div
                    // newDiv = document.getElementById('pro');
                    // create a new header element
                    newHeader = document.createElement('h4');
                    // create the text for the header element above
                    newHeaderText = document.createTextNode(data[i].PostDetails);
                    // some text based on your example
                    newTextNode = document.createTextNode(data[i].PostDetails);
                    // a line break (br)
                    lineBreak = document.createElement('hr');

                    // assign an id to the div
                    newDiv.setAttribute("class", "container p-3 pb-5 my-3 bg-dark text-white rounded");
                    // assign the source of the img element
                    newButton = document.createElement("a");
                    newButton.innerHTML = "View Comments";
                    newButton.setAttribute("class", "btn btn-primary btn-sm");
                    newButton.style = 'float:right';
                    //newButton.type = "button";

                    // newButton.href = "http://localhost/Assignment_/SpecificPost.html";
                    newButtonComment = document.createElement("a");
                    newButtonComment.innerHTML = "Comment";
                    newButtonComment.setAttribute("class", "btn btn-primary btn-sm");
                    newButtonComment.style = 'float:right; margin-right:6';
                    newButtonComment.addEventListener("click", createPost);
                    //newButtonComment.id = getElementById("");


                    newTextInput = document.createElement('textarea');
                    newTextInput.style = 'margin-top: 0px; margin-bottom: 8; width:100% ';
                    newTextInput.id = "postDetails";
                    // put that "box-[num]" text inside the div
                    newDiv.appendChild(newTextNode);
                    newDiv.appendChild(newHeader);

                    // put the headerText inside the h1 element
                    newHeader.appendChild(newHeaderText);
                    // put the header element inside the container div
                    newDiv.appendChild(newTextInput);
                    newDiv.appendChild(newButton);
                    newDiv.appendChild(newButtonComment);
                    var da = data[i].PostId;
                    // put the newly created div inside the body of our page (or document)
                    document.body.appendChild(newDiv);

                    $.ajax({
                        url: prefixPost + da + "/comments/",
                        method: "get",
                        complete: function(xmlhttp, status) {

                            if (xmlhttp.status == 200) {
                                var data = xmlhttp.responseJSON;
                                for (let i = 0; i < data.length; i++) {
                                    divComment = document.createElement('div');
                                    newHeader = document.createElement('h4');
                                    newHeader.innerHTML = data[i].CommentDetails;

                                    newDiv.appendChild(divComment);
                                    divComment.appendChild(newHeader);

                                };

                            } else {
                                console.log(xmlhttp.status + " : " + xmlhttp.statusText);
                            }
                        }
                    });


                };

            } else {
                console.log(xmlhttp.status + " : " + xmlhttp.statusText);
            }
        }
    });

    function createPost() {
        $.ajax({
            url: prefixPost,
            method: "post",
            headers: {
                contentType: "application/json"
            },
            data: {
                PostDetails: $("#postDetails").val()
            },
            complete: function(xmlHttp, status) {
                if (xmlHttp.status == 201) {
                    // $("#createMsg").html("Post created");
                    $("#postDetails").val("");
                } else {
                    // $("#createMsg").html("Error");
                    console.log(xmlHttp.status + ":" + xmlHttp.statusText);
                }
            }
        });
    };

    function loadComments(id) {
        $.ajax({
            url: prefixPost + id + "/comments",
            method: "get",
            complete: function(xmlhttp, status) {

                if (xmlhttp.status == 200) {
                    var data = xmlhttp.responseJSON;
                    let newDiv = document.getElementById('pro');
                    for (let i = 0; i < data.length; i++) {
                        divComment = document.createElement('div');
                        newHeader = document.createElement('h4');
                        newHeader.innerText = data[i].CommentDetails;

                        newdiv.appendChild(divComment);
                        divComment.appendChild(newHeader);

                    };

                } else {
                    console.log(xmlhttp.status + " : " + xmlhttp.statusText);
                }
            }
        });
    }




    //Last Block
});