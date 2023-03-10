function log(text) {
  document.getElementById('log').innerHTML += '<p>'+text+'</p>'
  console.log(text)
}

function screenOrient() {
if (firstPlayer!=99) {document.getElementById('player'+firstPlayer).classList.add('firstPlayer');}
if (screen.availHeight > screen.availWidth) {document.querySelectorAll('.doigt').forEach(setVert);}
else {document.querySelectorAll('.doigt').forEach(setHoriz);}}


function setVert(item) {item.classList.remove('horizontal');item.classList.add('vertical');}
function setHoriz(item) {item.classList.remove('vertical');item.classList.add('horizontal');}

function touchStart(event) {
touches = Array.from(event.touches);
Array.from(event.touches).forEach(storePlayer);
}

function storePlayer(touch) {
console.log(touch.identifier in players)
if ('player'+touch.identifier in players) {
  players['player'+touch.identifier].top=touch.clientY
  players['player'+touch.identifier].left=touch.clientX}
else {
  //New player
  do {random = Math.floor(Math.random()*choix.length);}
  while (choisis.includes(choix[random],0))
  choisis.push(choix[random])
  log('nouvel objet : '+JSON.stringify(choix[random]))
  players['player'+touch.identifier]={top:touch.clientY,left:touch.clientX,id:'player'+touch.identifier,heros:choix[random].pic}
  if (firstPlayer != 99) document.getElementById('player'+id).classList.remove('firstPlayer')
  firstPlayer = touches[Math.floor(Math.random()*touches.length)].identifier
  newItem = document.createElement('img')
  newItem.src='pics/'+choix[random].pic+'.png'
  newItem.id='player'+touch.identifier
  newItem.className='doigt'
  if (screen.availHeight > screen.availWidth) newItem.classList.add('vertical'); else newItem.classList.add('horizontal')
  document.body.appendChild(newItem)
  log(newItem.id)}

  item = document.getElementById('player'+touch.identifier)
  item.style.top = touch.clientY - (item.height)/2
  item.style.left = touch.clientX - (item.width)/2

}


document.addEventListener("DOMContentLoaded", screenOrient);
screen.orientation.addEventListener('change', screenOrient);
document.addEventListener('touchstart',touchStart);
//Supprimer le click droit sur clic long
window.addEventListener("contextmenu", function(e) { e.preventDefault(); })

persos = [{"nom":"barbare","pic":1,"sais":1, "cbt":1, "niv":1},{"nom":"Elfe lunaire","pic":2,"sais":1,"cbt":1,"niv":2},{"nom":"Moine","pic":3,"sais":1,"cbt":2,"niv":4},{"nom":"Paladin","pic":4,"sais":1,"cbt":2,"niv":5},{"nom":"Pyromancienne","pic":5,"sais":1,"cbt":3,"niv":3},{"nom":"Voleur de l'ombre","pic":6,"sais":1,"cbt":3,"niv":5},{"nom":"Tréant","pic":7,"sais":1,"cbt":4,"niv":6},{"nom":"Ninja","pic":8,"sais":1,"cbt":4,"niv":2},{"nom":"As de la gâchette","pic":9,"sais":2,"cbt":1,"niv":2},{"nom":"Samouraï","pic":10,"sais":2,"cbt":1,"niv":3},{"nom":"Tacticien","pic":11,"sais":2,"cbt":2,"niv":5},{"nom":"Chasseresse","pic":12,"sais":2,"cbt":2,"niv":5},{"nom":"Pirate maudite","pic":13,"sais":2,"cbt":3,"niv":4},{"nom":"Artificier","pic":14,"sais":2,"cbt":3,"niv":6},{"nom":"Séraphine","pic":15,"sais":2,"cbt":4,"niv":3},{"nom":"Reine vampire","pic":16,"sais":2,"cbt":4,"niv":4}]
choix = persos
touches = []
players = {}
choisis = []
firstPlayer = 99