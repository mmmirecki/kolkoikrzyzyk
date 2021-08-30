var turn = 'circle'

function start() {
    let start = document.getElementById('start')
    start.onclick = () =>{
        start.remove()
        document.getElementById('startCover').remove()
        console.log('start')
        createBoard()
    }
    
}

function createBoard(){
    let board = Array
    table = document.createElement('table')
    for (let i = 0; i < 3; i++) {
        board[i] = []
        tr = document.createElement('tr')
        for (let j = 0; j < 3; j++) {   
            td = document.createElement('td')
            td.className = 'blank'
            board[i][j] = {cell:td,clicked:false,x:i,y:j}
            td.onclick = () =>{
              clickCell(board[i][j])
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

function clickCell(target) {
    console.log(target.cell)
    cell = target.cell
    if(cell.className == 'blank'){
        cell.className = turn
        changeTurn()
    }
}

function changeTurn() {
    if (turn == 'circle') 
    { 
        turn = 'cross'
    }     
    else {turn = 'circle'}
    changeTurnText()
}
function changeTurnText() {
    document.getElementById('turnText').innerText = ' Time for ' + turn + '!!!'
}

start()