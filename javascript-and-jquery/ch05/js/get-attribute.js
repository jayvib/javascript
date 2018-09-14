var firstItem = document.getElementById("one");

if (firstItem.hasAttribute("class")) { // check first if it has the attribute needed
    var attr = firstItem.getAttribute("class"); // get the attribute from the node
    var el = document.getElementById("scriptResults"); 
    el.innerHTML = "<p>The first item has a class name: " + attr + "</p>";
}