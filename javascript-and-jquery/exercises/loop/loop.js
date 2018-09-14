function addList() {
    var el = document.getElementById("numbers");
    for (var i = 0; i < 10; i++) {
        var n = Math.floor(Math.random() * 10 + 1);
        var li = document.createElement("li");
        li.innerHTML = "<li>Number " + n + " !</li>";
        el.appendChild(li);
    }
}

window.onload = addList;