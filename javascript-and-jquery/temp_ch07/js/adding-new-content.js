$(function(){
    $('ul').before('<p class="notice">Just updated</p>'); // add the <p> tag before the <ul> tag
    $('li.hot').prepend('+ '); // add the '+ ' after the opening tag.
    var $newListItem = $('<li><em>gluten-free</em>soy sauce</li>'); // create anew <li> tag object
    $('li:last').after($newListItem);
});