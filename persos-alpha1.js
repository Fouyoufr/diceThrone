//Smartphone ou pas ?
// 'ontouchstart' in window

function fullScreen(event) {
    if (!document.fullscreen) document.body.requestFullscreen();
  }
  
  function screenOrient() {
  if (screen.availHeight > screen.availWidth) document.querySelectorAll('.player').forEach(setVert); else document.querySelectorAll('.player').forEach(setHoriz)}
  function setVert(item) {item.classList.remove('horizontal');item.classList.add('vertical')}
  function setHoriz(item) {item.classList.remove('vertical');item.classList.add('horizontal')}
  
  function touchStart(event) {
    event.preventDefault
    touches = Array.from(event.touches)
    touches.forEach(storePlayer)}
  
  function touchEnd(event) {
    event.preventDefault
    touches.forEach(clearPlayer)
    players = {}
    choisis = []
    touches = Array.from(event.touches)
    touchStart(event)
  }
  
  function touchMove(event) {
    event.preventDefault
    touchStart(event)
  }
  
  function clearPlayer(touch) {
    player = document.getElementById('player'+touch.identifier)
    player.parentNode.removeChild(player)
  }
  
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
    firstPlayer.classList.remove('firstPlayer')
    firstPlayerId = touches[Math.floor(Math.random()*touches.length)].identifier
    if (firstPlayerId == touch.identifier) firstPlayer = item; else firstPlayer = document.getElementById('player'+firstPlayerId)
    console.log(firstPlayer)
    if (screen.availHeight > screen.availWidth) item.classList.add('vertical'); else item.classList.add('horizontal')
    document.body.appendChild(item)}
  item.style.top = touch.clientY - (item.height)/2
  item.style.left = touch.clientX - (item.width)/2
  firstPlayer.classList.add('firstPlayer')
  }
  
  
  document.addEventListener("DOMContentLoaded", screenOrient)
  screen.orientation.addEventListener('change', screenOrient)
  document.addEventListener('touchstart',touchStart)
  document.addEventListener('touchend',touchEnd)
  document.addEventListener('touchmove',touchMove)
  document.addEventListener('onlcik',fullScreen)
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
  firstPlayer = document.createElement('img')