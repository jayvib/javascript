var itemTwo = document.getElementById("two");
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace("pine nuts", "kalle");
itemTwo.firstChild.nodeValue = elText;