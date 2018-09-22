var $listItemHTML = $('li').html(); // get the first <li> tag html
$('li').append('<i>' + $listItemHTML + '</i>'); // on every <li> tag append the $listItemHTML jquery object.