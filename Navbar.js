$(document).ready(function() {
    window.sessionStorage;
    if (sessionStorage.getItem("Auth") != "Ok") {
        let btnLogin = document.getElementById("btnLogin");
        let a = document.createElement("a");
        a.classList.add("btn", "btn-warning");
        a.href = "Login.html";
        a.innerText = "Login";
        btnLogin.appendChild(a);

    }

    if (sessionStorage.getItem("Auth") == "Ok" && sessionStorage.getItem("Type") == "Student") {
        let btnLogout = document.getElementById("btnLogin");
        let a = document.createElement("button");
        a.classList.add("btn", "btn-warning");
        a.onclick = function() {
            sessionStorage.clear();
            location.href = "Login.html";
        }
        a.innerText = "LogOut";
        let drop = document.getElementById("drop");
        let dropdown1 = document.createElement("a");
        dropdown1.classList.add("dropdown-item");
        dropdown1.href = "";
        dropdown1.innerText = "Discussion Prompt";

        let dropdown2 = document.createElement("a");
        dropdown2.classList.add("dropdown-item");
        dropdown2.href = "";
        dropdown2.innerText = "See Courses";

        drop.appendChild(dropdown1);
        btnLogout.appendChild(a);
    }
});