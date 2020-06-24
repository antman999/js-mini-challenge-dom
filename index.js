/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
const playersDivs = document.querySelector("div.player-container")
for (const key in PLAYERS){
  let playerObj = PLAYERS[key]
  let playerDiv = document.createElement('div')

  playerDiv.className = "player"
  playerDiv.dataset.number = `${playerObj.number}`
  playerDiv.innerHTML = `
  <h3>
      ${playerObj.name} (<em>${playerObj.nickname}</em>)
  </h3>
  <img src="${playerObj.photo} alt="${playerObj.name}">
  `
  playerDivs.append(playerDiv)
}

}
)


/***** Deliverable 4 *****/