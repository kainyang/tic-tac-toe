const reset = () => {
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
}

const buildBoard = (size) => {
    document.getElementById("game").innerHTML = '';

    for (var x = 1; x <= size; x++) {
        document.getElementById("game").innerHTML += `<div id="board-row-${x}"></div>`;

        var boardRow = document.getElementById(`board-row-${x}`);
        for (var y = 1; y <= size; y++) {
            boardRow.innerHTML += `<li id="${x}-${y}" class="btn span1">+</li>`;
        }
    }
}

const checkWinCondition = (size, marker) => {
    if (checkRows(size, marker)) return true;
    if (checkColumns(size, marker)) return true;
    if (checkLeftDiagonal(size, marker)) return true;
    if (checkRightDiagonal(size, marker)) return true;

    return false;
}

const checkRows = (size, marker) => {
    for (var x = 1; x <= size; x++) {
        var winCondition = [];

        for (var y = 1; y <= size; y++) {
            if ($(`#${x}-${y}`).hasClass(marker)) {
                winCondition.push(true);
            } else {
                winCondition.push(false);
            }
        }

        if (!winCondition.includes(false)) {
            return true;
        }
    }

    return false;
}

const checkColumns = (size, marker) => {
    for (var y = 1; y <= size; y++) {
        var winCondition = [];

        for (var x = 1; x <= size; x++) {
            if ($(`#${x}-${y}`).hasClass(marker)) {
                winCondition.push(true);
            } else {
                winCondition.push(false);
            }
        }

        if (!winCondition.includes(false)) {
            return true;
        }
    }

    return false;
}

const checkLeftDiagonal = (size, marker) => {
    var winCondition = [];

    for (var i = 1; i <= size; i++) {
        if ($(`#${i}-${i}`).hasClass(marker)) {
            winCondition.push(true);
        } else {
            winCondition.push(false);
        }
    }

    if (!winCondition.includes(false)) {
        return true;
    }

    return false;
}

const checkRightDiagonal = (size, marker) => {
    var x = 1;
    var y = size;
    var winCondition = [];

    while (x <= size) {
        if ($(`#${x}-${y}`).hasClass(marker)) {
            winCondition.push(true);
        } else {
            winCondition.push(false);
        }
        x++;
        y--;
    }

    if (!winCondition.includes(false)) {
        return true;
    }

    return false;
}
