$(function(){
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover', // event trigger by click or mouse over
        ':not(#four)', // filter out the element whose id is 'four'
        {'status': 'importanti'}, // additional data that will be used by the event handler.
        function(e){
            listItem = 'Item:' + e.target.textContent + '<br/>';
            itemStatus = 'Status:' + e.data.status + '<br/>';
            eventType = 'Event:' + e.type; // e.type is the event type.
            $('#notes').html(listItem + itemStatus + eventType);
        }
    )
});