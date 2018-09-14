var el = document.querySelector("li.hot");
el.className = "cool";

var els = document.querySelectorAll("li.hot");
els[1].className = "cool";

var el2 = document.querySelector("li.hot");
el2.className = "cool";

var els2 = document.querySelectorAll("li.hot"); // query selector all return a node list of all matched selector
els2[1].className = "cool";