function checkUsername() {
    var username = el.value;
    if (username.length < 5) {
        elMsg.className = "warning";
        elMsg.textContent = "Not long enough, yet...";
    } else {
        elMsg.textContent = "";
    }
}

function tipUser() {
    elMsg.className = "tip";
    elMsg.innerHTML = "Username must be at least 5 characters";
}

var el = document.getElementById("username");
var elMsg = document.getElementById("feedback");

el.addEventListener("focus", tipUser, false);
el.addEventListener("blur", checkUsername, false);