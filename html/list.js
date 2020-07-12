$(function() {

let $list, $newItemForm, $newItemButton;
let item = '';
$newItemForm = $('#newItemForm');
$newItemButton = $('#newItemButton');

$('li.list-item').hide().each(function(index) {
    $(this).delay(450 * index).fadeIn(1600);
});

function updateCount() {
    let items = $('ul#list > li[class!=complete]').length;
    $('#counter').text(items);
}
updateCount();

});