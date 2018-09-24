$(function(){
  $('li').each(function(){ // query all the list item
    var ids = this.id; // get the value of id; 'this' is the current element in the loop.

      // append a new child to the list. $(this) is used to create a jQuery object that contains the current element
      // in the loop
    $(this).append('<span class="order"> ' + ids + '</span>');
  });
});