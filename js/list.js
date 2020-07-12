$(function() {

    let $list, $newItemForm, $add_button;
    let item = '';
    $list = $('#list');
    $add_button = $('.adding-box');
    $newItemForm = $('#newItemForm');

    /* 
    if there are elements at the beginning they
     will be shown with an initial fade 
    */
    $('li.list-item').hide().each(function(index) {
        $(this).delay(450 * index).fadeIn(1600);
    });

    /* item counter */
    function updateCount() {
        let items = $('#list > li[class!=complete]').length;
        $('#counter').text(items);
    }
    updateCount();

    /* 
    when the document is ready the form is hide. 
    at the click on the add_button the form will be shown
    */
    $newItemForm.hide();
    $add_button.on('click', function(e) {
        e.preventDefault();
        $newItemForm.delay(200).slideDown();
    });

    /* adds the element specified in the module to the end of the list */
    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        let text = $('input:text').val();
        if (text !== '') {
            $list.append('<li class=\"list-item\">' + text + '</li>');
            $('input:text').val('');
            updateCount();
        }
        
    });

    /* 
    event delegation 
    if the item is complete it is removed 
    else is added to the end of the list
    */
    $list.on('click', 'li', function() {
        let $this = $(this);
        let complete = $this.hasClass('complete');
        
        if (complete === true) {
            $this.animate({
                opacity: 0.0, 
                paddingLeft: '100%'
            }, 500, function() {
                $this.remove(); 
            });
        } else {
            item = $this.text();
            $this.remove();
            $list.append('<li class=\"complete\">' + item + '</li>')
            .hide().fadeIn(300);
            updateCount();
        }
    });

});
