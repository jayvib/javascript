var startItem = document.getElementById("two");
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

prevItem.className = "complete";
nextItem.className = "cool";

var parents = document.getElementsByTagName("ul");

if (parents.length > 0) {
    var ul = parents[0];
    var lastChild = ul.lastChild;
    var firstChild = ul.firstChild;
    lastChild.className = "complete";
    firstChild.className = "cool";
}