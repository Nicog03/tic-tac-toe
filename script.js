
const Player = (name, markSVG) =>  {
    return {name, markSVG}
}

const Player1 = Player('X', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"></path></svg>')

const Player2 = Player( 'O', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"></path></svg>')

const GameBoard = (() => {
    const gameboard = document.querySelectorAll('body > div > button')

    const checkForWin = () => {
        //itterates horizontally through all gameboard
    for (let l=0;l<=6;l+=3) {
        for (let c=l;c<l+3;c++) {
                if (Boolean(gameboard[l].player) && gameboard[c].player == gameboard[l].player) {

                    if (c == l+2) {
                        alertWinner(gameboard[l].player)
                    }
                } else {break}
            }
    }

    //itterates vertically through all gameboard
    for (let c=0;c<=2;c++) {
        for (let l=c;l<=c+6;l+=3) {
            if (Boolean(gameboard[c].player) && gameboard[l].player == gameboard[c].player) {

                if (l == c+6) {
                    alertWinner(gameboard[l].player)
                }
            } else {break}
        }
    }

    //itterates diagonally to the right
    for (let i=0;i<=8;i+=4) {
        if (Boolean(gameboard[0].player) && gameboard[0].player == gameboard[i].player) {
            i == 8 ? alertWinner(gameboard[i].player) : null
        } else {break}
    }

    //itterates diagonally to the left
    for (let i=2;i<=6;i+=2) {
        if (Boolean(gameboard[2].player) && gameboard[2].player == gameboard[i].player) {
            i == 6 ? alertWinner(gameboard[i].player) : null
        } else {break}
    }
    }

    const addClickListener = () => {
        gameboard.forEach(square => {
            square.onclick = () => {
                
                square.player = player.name
        
                //assign a simbol to the square
                if (!Boolean(square.innerHTML)) {
        
                    if (player == Player1) {
                        square.innerHTML = player.markSVG
                        player = Player2
                    } else {
                        square.innerHTML = player.markSVG
                        player = Player1
                    }
                }
                
                GameBoard.checkForWin()
            }
        })
    }

    const alertWinner = (winner) => {
        const body = document.querySelector('body')

        const winnerWindow = document.createElement('div')
        winnerWindow.classList.add('winner-window')
        body.appendChild(winnerWindow)
                
        const winnerWindowText = document.createElement('p')
        winnerWindowText.textContent = `The ${winner} player has won the game`

        const button = document.createElement('button')
        button.textContent = "New game"
        
        winnerWindow.appendChild(winnerWindowText)
        winnerWindow.appendChild(button)
        
        button.onclick = () => {} //put the button action here
    }

    return {checkForWin, addClickListener}
})()

let player = Player1

GameBoard.addClickListener()