
let restart = document.querySelector("#restart")
let message = document.querySelector("#message")
let cells = document.querySelectorAll(".cell")

let player = Math.random() < 0.5 ? "X":"0"
message.innerText = "Move:" + player
 
let steps = 0

let gameOver = false

let win = [[ 1,2,3],[4,5,6],[7,8,9],[3,6,9],[2,5,8],[1,4,7],[1,5,9],[3,5,7]]

let zIndex = 100

function changePlayer () {
    player = player == "X"?"0":"X"
    message.innerText = "Move:" + player
}

cells.forEach(function(cell) {
  cell.addEventListener("click",function(){
    if (this.innerText == "" && gameOver != true){
      cell.style.zIndex = zIndex
      zIndex++
        cell.classList.add("pressed")
        this.innerText = player

        steps++
        if(checkWin() == true){
          message.innerText = "Won:" + player
          gameOver = true
        }
        else if (steps == 9) {
          message.innerText = "Draw" 
          gameOver = true
        }
        else{
          changePlayer()
        }


      
  }
  })  
})

restart.addEventListener("click",function(){
    cells.forEach(function(cell){
        cell.innerText = ""
        cell.style.background = "white"
        cell.classList.remove("pressed")
    })
    let player = Math.random() < 0.5 ? "X":"0"
        message.innerText = "Move:" + player
    gameOver = false
    steps = 0
})

function checkWin() {
  for (let i = 0; i < win.length;i++){
    let comb = win[i]
    let check = cells[comb[0] - 1].innerText == player &&
                cells[comb[1] - 1].innerText == player &&
                cells[comb[2] - 1].innerText == player 
    if (check) {
      cells[comb[0] - 1].style.background = "lightgreen"
      cells[comb[1] - 1].style.background = "lightgreen"
      cells[comb[2] - 1].style.background = "lightgreen"
      return true
    }            
  }
  return false
}


