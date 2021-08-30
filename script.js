var turn = 'circle'

function start() {
    let start = document.getElementById('start')
    start.onclick = () => {
        start.remove()
        document.getElementById('startCover').remove()
        console.log('start')
        createBoard()
    }

}
start()


function createBoard() {
    let board = Array
    table = document.createElement('table')
    for (let i = 0; i < 3; i++) {
        board[i] = []
        tr = document.createElement('tr')
        for (let j = 0; j < 3; j++) {
            td = document.createElement('td')
            td.className = 'blank'
            board[i][j] = { cell: td, clicked: false, x: i, y: j }
            td.onclick = () => {
                clickCell(board[i][j], board)
            }
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    let turnText = document.createElement('div')
    turnText.id = 'turnText'
    turnText.innerText = ' Time for ' + turn + '!!!'
    document.body.appendChild(turnText)
    document.body.appendChild(table)
}

function clickCell(target, board) {
    cell = target.cell
    if (cell.className == 'blank') {
        cell.className = turn
        threeInLine(target, board)
        changeTurn()
    }
}

function changeTurn() {
    if (turn == 'circle') {
        turn = 'cross'
    }
    else { turn = 'circle' }
    changeTurnText()
}
function changeTurnText() {
    document.getElementById('turnText').innerText = ' Time for ' + turn + '!!!'
}

function threeInLine(clickedCell, board) {
    console.log(clickedCell)
    let x = clickedCell.x
    let y = clickedCell.y
    let inLine = 1
    let clickedCellClassName = clickedCell.cell.className
    let win = false

    //góra
    while (x > 0) {
        x -= 1
        if (board[x][y].cell.className == clickedCellClassName) {
            inLine += 1
        }
    }
    x = clickedCell.x

    //dół
    while (x < 2) {
        x += 1
        if (board[x][y].cell.className == clickedCellClassName) {
            inLine += 1
        }
    }
    if (inLine == 3) { win = true }
    inLine = 1
    x = clickedCell.x

    //lewo
    while (y > 0) {
        y -= 1
        if (board[x][y].cell.className == clickedCellClassName) {
            inLine += 1
        }
    }
    y = clickedCell.y

    //prawo
    while (y < 2) {
        y += 1
        if (board[x][y].cell.className == clickedCellClassName) {
            inLine += 1
        }
    }
    if (inLine == 3) { win = true }
    inLine = 1
    y = clickedCell.y

    //lewogóra
    while (x > 0 && y > 0) {
        x -= 1
        y -= 1
        if (board[x][y].cell.className == clickedCellClassName) {
            inLine += 1
        }
    }
    y = clickedCell.y
    x = clickedCell.x

    //prawodol
    while (x <2 && y <2) {
        x += 1
        y += 1
        if (board[x][y].cell.className == clickedCellClassName) {
            inLine += 1
        }
    }
    if (inLine == 3) { win = true }
    inLine = 1
    y = clickedCell.y
    x = clickedCell.x

    //prawogora
    while (x > 0 && y < 2) {
        x -= 1
        y += 1
        if (board[x][y].cell.className == clickedCellClassName) {
            inLine += 1
        }
    }
    y = clickedCell.y
    x = clickedCell.x

    //lewodol
    while (x < 2 && y > 0) {
        x += 1
        y -= 1
        if (board[x][y].cell.className == clickedCellClassName) {
            inLine += 1
        }
    }
    if (inLine == 3) { win = true }
    if (win){
        console.log('WYGRALES')
    }
}