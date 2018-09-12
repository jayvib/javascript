function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement; // e.srcElement for IE
}

function itemDone(e) {
    var target, elParent, elGrandparent;
    target = getTarget(e); // <a> tag
    elParent = target.parentNode; // <il> tag
    elGrandparent = target.parentNode.parentNode; // <ul> tag
    elGrandparent.removeChild(elParent); // remove the parent of the clicked <a> tag
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

var el = document.getElementById("shoppingList");
if (el.addEventListener) {
    el.addEventListener("click", function(e){
        itemDone(e);
    }, false);
}


