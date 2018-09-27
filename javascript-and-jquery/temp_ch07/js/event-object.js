$(function(){
    $('li').on('click', function(e){ // on ever <li> tag when click invoke this function
        $('li span').remove();  // remove the <span> tag that is inside the <li> tag.
        var date = new Date(); // create a new Date object.
        date.setTime(e.timeStamp); // set the time in the new Date object created using the event timestamp.
        var clicked = date.toDateString(); // convert hte date into a readable string date.
        $(this).append('<span class="date"' + clicked + ' ' + e.type + '</span>'); // for the clicked <li> object add the <span> tag in to the list.
    });
});