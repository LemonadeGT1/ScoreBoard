
// let redScore = 0
// let blueScore = 0



// function incrementRedScore(amount){
//   redScore += amount
//   let newRedScore = document.getElementById('redMeepleScore')
//   newRedScore.innerText = redScore
// }

// function incrementBlueScore(amount){
//   blueScore += amount
//   let newBlueScore = document.getElementById('blueMeepleScore')
//   newBlueScore.innerText = blueScore
// }

//NOTE - The Goal was to use a single function for all four (or more) incrementor buttons

function incrementScore(ticker, amount){
  let boardToUpdate = document.getElementById(ticker)
  let oldScore = parseInt(boardToUpdate.innerText)
  let newScore = oldScore + amount
  boardToUpdate.innerText = newScore
}

function resetScores(){
  let resetRed = document.getElementById('redMeepleScore')
  let resetBlue = document.getElementById('blueMeepleScore')
  
  resetRed.innerText = 0
  resetBlue.innerText = 0
}

