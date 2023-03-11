function screenOrient() {
if (screen.availHeight > screen.availWidth) document.querySelectorAll('.player').forEach(setVert); else document.querySelectorAll('.player').forEach(setHoriz)}
function setVert(item) {item.classList.remove('horizontal');item.classList.add('vertical')}
function setHoriz(item) {item.classList.remove('vertical');item.classList.add('horizontal')}

function touchStart(event) {
  event.preventDefault
  if (window.innerHeight != screen.height) document.body.requestFullscreen();
  touches = Array.from(event.touches)
  Array.from(event.touches).forEach(storePlayer)}

function touchEnd(event) {
  event.preventDefault
  if (touches.length>1) {
    //Supprimer précédent premier joueur avant de nettoyer la liste
    document.getElementById('player'+firstPlayer).classList.remove('firstPlayer')}
  //Nettoyage des touches avant réaffichage
  touches.forEach(clearPlayer)
  touches = Array.from(event.touches)
  touchStart(event)
}

function clearPlayer(touch) {
  document.getElementById('player'+touch.identifier).remove}

function storePlayer(touch) {
if ('player'+touch.identifier in players) {
  players['player'+touch.identifier].top=touch.clientY
  players['player'+touch.identifier].left=touch.clientX
  item = document.getElementById('player'+touch.identifier)
}
else {
  //New player
  do {random = Math.floor(Math.random()*choix.length)}
  while (choisis.includes(choix[random],0))
  choisis.push(choix[random])
  players['player'+touch.identifier]={top:touch.clientY,left:touch.clientX,id:'player'+touch.identifier,heros:choix[random].pic}
  item = document.createElement('img')
  item.src='pics/'+choix[random].pic+'.png'
  item.id='player'+touch.identifier
  item.className='player'
  if (firstPlayer != 99) document.getElementById('player'+firstPlayer).classList.remove('firstPlayer')
  firstPlayer = touches[Math.floor(Math.random()*touches.length)].identifier
  if (firstPlayer == touch.identifier) item.classList.add('firstPlayer'); else document.getElementById('player'+firstPlayer).classList.add('firstPlayer')
  if (screen.availHeight > screen.availWidth) item.classList.add('vertical'); else item.classList.add('horizontal')
  document.body.appendChild(item)}
item.style.top = touch.clientY - (item.height)/2
item.style.left = touch.clientX - (item.width)/2
}


document.addEventListener("DOMContentLoaded", screenOrient)
screen.orientation.addEventListener('change', screenOrient)
document.addEventListener('touchstart',touchStart)
document.addEventListener('touchend',touchEnd)
//Supprimer le click droit
window.addEventListener("contextmenu", function(e) { e.preventDefault()})

persos = [{"nom":"barbare","pic":1,"sais":1, "cbt":1, "niv":1},{"nom":"Elfe lunaire","pic":2,"sais":1,"cbt":1,"niv":2},
{"nom":"Moine","pic":3,"sais":1,"cbt":2,"niv":4},{"nom":"Paladin","pic":4,"sais":1,"cbt":2,"niv":5},
{"nom":"Pyromancienne","pic":5,"sais":1,"cbt":3,"niv":3},{"nom":"Voleur de l'ombre","pic":6,"sais":1,"cbt":3,"niv":5},
{"nom":"Tréant","pic":7,"sais":1,"cbt":4,"niv":6},{"nom":"Ninja","pic":8,"sais":1,"cbt":4,"niv":2}
//,{"nom":"As de la gâchette","pic":9,"sais":2,"cbt":1,"niv":2},{"nom":"Samouraï","pic":10,"sais":2,"cbt":1,"niv":3},{"nom":"Tacticien","pic":11,"sais":2,"cbt":2,"niv":5},{"nom":"Chasseresse","pic":12,"sais":2,"cbt":2,"niv":5},{"nom":"Pirate maudite","pic":13,"sais":2,"cbt":3,"niv":4},{"nom":"Artificier","pic":14,"sais":2,"cbt":3,"niv":6},{"nom":"Séraphine","pic":15,"sais":2,"cbt":4,"niv":3},{"nom":"Reine vampire","pic":16,"sais":2,"cbt":4,"niv":4}
]
choix = persos
touches = []
players = {}
choisis = []
firstPlayer = 99