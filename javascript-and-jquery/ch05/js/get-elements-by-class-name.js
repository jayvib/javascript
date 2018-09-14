var elements = document.getElementsByClassName("hot");

if (elements.length > 2) { // check if it has more than 2 nodes
    var el = elements[2]; // get the 3rd node
    el.className = "cool"; // set the class name to 'cool'
}
