function fullScreen(event) {if ((!document.fullscreen) && ('ontouchstart' in window)) document.body.requestFullscreen();}

function options() {
  if(isMobile) {
      persos.forEach((perso)=>{
      persoChoice=document.createElement('input')
      persoChoice.type='checkbox'
      persoChoice.id='perso'+perso.pic
      persoChoiceLabel = document.createElement('label')
      persoChoiceLabel.htmlFor='perso'+perso.pic
      persoChoiceLabel.appendChild(document.createTextNode(perso.nom));
      mobHorScreen.appendChild(persoChoice);
      mobHorScreen.appendChild(persoChoiceLabel);
    })
  }
}

function screenOrient() {
  console.log ('screenOrient')
  if (screen.availHeight > screen.availWidth) {
    mobVerScreen.style.display = 'block'
    mobHorScreen.style.display = 'none'}
  else {
    mobVerScreen.style.display = 'none'
    mobHorScreen.style.display = 'block'}}
function playersChange(event) {
event.preventDefault
//On commence par faire le ménage (après avoir sauvegardé le premier joueur le cas échéant)

players.forEach(clearPlayer)
if (players.length > maxPlayers.length) maxPlayers = players
players=[]
choisis=[]
Array.from(event.touches).forEach(copyTouch)
if (players.length>1)  document.getElementById('player'+Math.floor(Math.random()*players.length)).classList.add('firstPlayer')
if (players.length==0 && maxPlayers.length!=0) {
  //Affichage du résultat
}
}

function clearPlayer(player) {player.parentNode.removeChild(player)}

function copyTouch(touch) {
do {random = Math.floor(Math.random()*choix.length)}
while (choisis.includes(choix[random],0))
choisis.push(choix[random])
newPlayer = document.createElement('img');
newPlayer.src = 'pics/'+choix[random].pic+'.png'
newPlayer.id = 'player'+touch.identifier
newPlayer.className = 'player'
document.body.appendChild(newPlayer)
newPlayer.style.top = touch.clientY - (newPlayer.height)/2
newPlayer.style.left = touch.clientX - (newPlayer.width)/2
players.push(newPlayer)
if (players.length > maxPlayers.length) {
  //Préparation du résultat
  maxPlayer = document.createElement('img');
  maxPlayer.src = 'pics/'+choix[random].pic+'.png'
  maxPlayer.id = 'maxPlayer'+touch.identifier
  maxPlayer.className = 'player'
  maxPlayer.style.top = touch.clientY - (newPlayer.height)/2
  maxPlayer.style.left = touch.clientX - (newPlayer.width)/2}}

function touchMove(event) {
event.preventDefault
Array.from(event.changedTouches).forEach(moveTouch)}

function moveTouch(touch) {
player = document.getElementById('player'+touch.identifier)
player.style.top = touch.clientY - (newPlayer.height)/2
player.style.left = touch.clientX - (newPlayer.width)/2}

//Gestion du type de périphérique (mobile/autre) et de l'orientation de l'écran sur mobile
mobHorScreen = null
mobVerScreen = null
compScreen = null
isMobile = false
window.addEventListener("load", () => {
  mobVerScreen = document.getElementById('mobile-vertical')
  mobHorScreen = document.getElementById('mobile-horizontal')
  compScreen = document.getElementById('ordinateur')
  isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)
  if (isMobile) {
    screenOrient()
    mobVerScreen.addEventListener('touchstart',playersChange)
    mobVerScreen.addEventListener('touchend',playersChange)
    mobVerScreen.addEventListener('touchmove',touchMove)
    mobVerScreen.addEventListener('click',fullScreen)
    screen.orientation.addEventListener('change', screenOrient)
    compScreen.style.display='none'}
  else {
    mobVerScreen.style.display='none';
    mobHorScreen.style.display='none';
    compScreen.style.display='block';}
})

//Supprimer le click droit
window.addEventListener("contextmenu", function(e) { e.preventDefault()})

persos = [{"nom":"barbare","pic":1,"sais":1, "cbt":1, "niv":1},{"nom":"Elfe lunaire","pic":2,"sais":1,"cbt":1,"niv":2},
{"nom":"Moine","pic":3,"sais":1,"cbt":2,"niv":4},{"nom":"Paladin","pic":4,"sais":1,"cbt":2,"niv":5},
{"nom":"Pyromancienne","pic":5,"sais":1,"cbt":3,"niv":3},{"nom":"Voleur de l'ombre","pic":6,"sais":1,"cbt":3,"niv":5},
{"nom":"Tréant","pic":7,"sais":1,"cbt":4,"niv":6},{"nom":"Ninja","pic":8,"sais":1,"cbt":4,"niv":2}
//,{"nom":"As de la gâchette","pic":9,"sais":2,"cbt":1,"niv":2},{"nom":"Samouraï","pic":10,"sais":2,"cbt":1,"niv":3},{"nom":"Tacticien","pic":11,"sais":2,"cbt":2,"niv":5},{"nom":"Chasseresse","pic":12,"sais":2,"cbt":2,"niv":5},{"nom":"Pirate maudite","pic":13,"sais":2,"cbt":3,"niv":4},{"nom":"Artificier","pic":14,"sais":2,"cbt":3,"niv":6},{"nom":"Séraphine","pic":15,"sais":2,"cbt":4,"niv":3},{"nom":"Reine vampire","pic":16,"sais":2,"cbt":4,"niv":4}
]
choix = persos
players = []
maxPlayers = []