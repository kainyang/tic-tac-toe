// JavaScript Document
$(document).ready(function () {

    var optionsButton = document.getElementById("submit");

    optionsButton.addEventListener("click", function () {
        var x_icon = "x"
        var o_icon = "o"
        var count = 0;
        var o_win = 0;
        var x_win = 0;
        var size = parseInt(document.getElementById("boardsize_input").value);

        buildBoard(size);

        $('#game li').click(function () {

            if (checkWinCondition(size, 'o')) {
                alert('O has won the game. Start a new game')
                reset();
            } else if (checkWinCondition(size, 'x')) {
                alert('X wins has won the game. Start a new game')
                reset();
            } else if (count === size * size) {
                alert('Its a tie. It will restart.')
                reset();
                count = 0
            } else if ($(this).hasClass('disable')) {
                alert('Already selected')
            } else if (count % 2 === 0) {
                count++
                $(this).text(o_icon)
                $(this).addClass('disable o btn-primary')
                if (checkWinCondition(size, 'o')) {
                    alert('O wins');
                    count = 0;
                    o_win++;
                    $('#o_win').text(o_win);
                }
            } else {
                count++
                $(this).text(x_icon)
                $(this).addClass('disable x btn-info')
                if (checkWinCondition(size, 'x')) {
                    alert('X wins');
                    count = 0;
                    x_win++;
                    $('#x_win').text(x_win);
                }
            }

        });
        $("#reset").click(function () {
            reset();
            count = 0
        });
        $("#reset-score").click(function () {
            reset();
            count = 0;
            o_win = 0;
            x_win = 0;
            $('#x_win').text(x_win)
            $('#o_win').text(o_win)
        });
    });
});
