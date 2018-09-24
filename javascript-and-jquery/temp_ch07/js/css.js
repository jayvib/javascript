$(function(){
    var $listItem = $('li');
    var backgroundColor = $listItem.css('background-color'); // get the value of the background-color
    $('ul').append('<p>Color was: ' + backgroundColor + '</p>' ); // append a child
    $listItem.css({ // add multiple css property
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75',
    });
});