function screenOrient() {
    if (screen.availHeight > screen.availWidth) {document.querySelectorAll('.doigt').forEach(setVert);}
    else {document.querySelectorAll('.doigt').forEach(setHoriz);}}
  
  function setVert(item) {item.classList.remove('horizontal');item.classList.add('vertical');}
  function setHoriz(item) {item.classList.remove('vertical');item.classList.add('horizontal');}
  
  function touchStart(event) {
    console.log("touchStart.");
    touches = Array.from(event.touches);
    touches.forEach(touchDisplay);
  
  }
  
  function touchDisplay(touche) {
  if (document.getElementById('player'+touche.identifier)==null) {
      //Création d'un objet
      newItem = document.createElement('img')
      newItem.src='pics/1.png';
      newItem.id='player'+touche.identifier;
      newItem.className='doigt';
      document.body.appendChild(newItem);
      screenOrient();}
  
  item = document.getElementById('player'+touche.identifier)
  item.style.top = touche.clientY - (item.height)/2;
  item.style.left = touche.clientX - (item.width)/2;
  }
  
  document.addEventListener("DOMContentLoaded", screenOrient);
  screen.orientation.addEventListener('change', screenOrient);
  document.addEventListener('touchstart',touchStart);
  persos = [{"nom":"barbare","pic":1,"sais":1, "cbt":1, "niv":1},{"nom":"Elfe lunaire","pic":2,"sais":1,"cbt":1,"niv":2},{"nom":"Moine","pic":3,"sais":1,"cbt":2,"niv":4},{"nom":"Paladin","pic":4,"sais":1,"cbt":2,"niv":5},{"nom":"Pyromancienne","pic":5,"sais":1,"cbt":3,"niv":3},{"nom":"Voleur de l'ombre","pic":6,"sais":1,"cbt":3,"niv":5},{"nom":"Tréant","pic":7,"sais":1,"cbt":4,"niv":6},{"nom":"Ninja","pic":8,"sais":1,"cbt":4,"niv":2},{"nom":"As de la gâchette","pic":9,"sais":2,"cbt":1,"niv":2},{"nom":"Samouraï","pic":10,"sais":2,"cbt":1,"niv":3},{"nom":"Tacticien","pic":11,"sais":2,"cbt":2,"niv":5},{"nom":"Chasseresse","pic":12,"sais":2,"cbt":2,"niv":5},{"nom":"Pirate maudite","pic":13,"sais":2,"cbt":3,"niv":4},{"nom":"Artificier","pic":14,"sais":2,"cbt":3,"niv":6},{"nom":"Séraphine","pic":15,"sais":2,"cbt":4,"niv":3},{"nom":"Reine vampire","pic":16,"sais":2,"cbt":4,"niv":4}];
  touches = [];