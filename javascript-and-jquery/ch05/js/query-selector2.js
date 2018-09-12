
window.onload = init;
function init() {
    var els = document.querySelectorAll("li.hot");

    for (var i = 0; i < els.length; i++) {
        els[i].className = "cool" ;
    }
}

