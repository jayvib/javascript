$(function(){
    $('li:contains("List")').text("LIST");
    $('li').html(function(){
        return '<em>' + $(this).html() + '</em>';
    })
});