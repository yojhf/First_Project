$(function(){
    $('.md_pop_close').click(function(){
        $('html, body').css('overflow', '');
        $('.pop_gr').hide();
        $('.head_araa .box_style1').animate( {
            right: '-300px'
        } );
    });

    $('.md_pop_show').click(function(){
        $('html, body').css('overflow', 'hidden');
        $('.pop_gr').show();
        $('.head_araa .box_style1').animate( {
            right: '0'
        } );
    });

    $('.start_btn').click(function(){
        $('#game_start').hide();
        $('#game_play').show();
    })

    $('.restart_btn').click(function(){
        $('#game_start').show();
        $('#game_play').hide();
        $('#game_over').hide();

    })

})