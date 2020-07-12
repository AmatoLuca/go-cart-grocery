$(function() {

    let $list, $newItemForm, $add_button;
    let item = '';
    $list = $('#list');
    $add_button = $('.adding-box');
    $newItemForm = $('#newItemForm');

    $('li.list-item').hide().each(function(index) {
        $(this).delay(450 * index).fadeIn(1600);
    });

    function updateCount() {
        let items = $('#list > li[class!=complete]').length;
        $('#counter').text(items);
    }
    updateCount();

    $newItemForm.hide();
    $add_button.on('click', function(e) {
        e.preventDefault();
        $newItemForm.delay(200).slideDown();
    });

    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        let text = $('input:text').val();
        if (text !== '') {
            $list.append('<li class=\"list-item\">' + text + '</li>');
            $('input:text').val('');
            updateCount();
        }
        
    });

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
