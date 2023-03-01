let squares = document.querySelectorAll('body > div > button')

let playerX = (function() {

    let name = 'X'

    let playerMarkSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"></path></svg>'

    return {playerMarkSVG, name,}
})()

let playerO = (function() {

    let name = 'O'

    let playerMarkSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"></path></svg>'

    return {playerMarkSVG, name}
})()

function checkForWin() {
    
    //itterates horizontally through all squares
    for (let l=0;l<=6;l+=3) {
        for (let c=l;c<l+3;c++) {
                if (Boolean(squares[l].player) && squares[c].player == squares[l].player) {

                    if (c == l+2) {
                        alert('win')
                    }
                } else {break}
            }
    }

    //itterates vertically through all squares
    for (let c=0;c<=2;c++) {
        for (let l=c;l<=c+6;l+=3) {
            if (Boolean(squares[c].player) && squares[l].player == squares[c].player) {

                if (l == c+6) {
                    alert('win')
                }
            } else {break}
        }
    }

    //itterates diagonally to the right
    for (let i=0;i<=8;i+=4) {
        if (Boolean(squares[0].player) && squares[0].player == squares[i].player) {
            i == 8 ? alert('win') : null
        } else {break}
    }

    //itterates diagonally to the left
    for (let i=2;i<=6;i+=2) {
        if (Boolean(squares[2].player) && squares[2].player == squares[i].player) {
            i == 6 ? alert('win') : null
        } else {break}
    }
}

let player = playerX

squares.forEach(square => {
    square.onclick = () => {
        
        square.player = player.name

        //assign a simbol to the square
        if (!Boolean(square.innerHTML)) {

            if (player == playerX) {
                square.innerHTML = player.playerMarkSVG
                player = playerO
            } else {
                square.innerHTML = player.playerMarkSVG
                player = playerX
            }
        }
        
        checkForWin()
    }
})