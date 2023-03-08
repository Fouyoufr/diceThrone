persos = [{"nom":"barbare","pic":1,"sais":1, "cbt":1, "niv":1},{"nom":"Elfe lunaire","pic":2,"sais":1,"cbt":1,"niv":2},{"nom":"Moine","pic":3,"sais":1,"cbt":2,"niv":4},{"nom":"Paladin","pic":4,"sais":1,"cbt":2,"niv":5},{"nom":"Pyromancienne","pic":5,"sais":1,"cbt":3,"niv":3},{"nom":"Voleur de l'ombre","pic":6,"sais":1,"cbt":3,"niv":5},{"nom":"Tréant","pic":7,"sais":1,"cbt":4,"niv":6},{"nom":"Ninja","pic":8,"sais":1,"cbt":4,"niv":2},{"nom":"As de la gâchette","pic":9,"sais":2,"cbt":1,"niv":2},{"nom":"Samouraï","pic":10,"sais":2,"cbt":1,"niv":3},{"nom":"Tacticien","pic":11,"sais":2,"cbt":2,"niv":5},{"nom":"Chasseresse","pic":12,"sais":2,"cbt":2,"niv":5},{"nom":"Pirate maudite","pic":13,"sais":2,"cbt":3,"niv":4},{"nom":"Artificier","pic":14,"sais":2,"cbt":3,"niv":6},{"nom":"Séraphine","pic":15,"sais":2,"cbt":4,"niv":3},{"nom":"Reine vampire","pic":16,"sais":2,"cbt":4,"niv":4}];
window.onload = function() {
    //gestion de l'orientation de l'écran
    screenOrient();
    screen.orientation.onchange = function (){
      screenOrient();};};

function screenOrient() {
    //Vertical
    if (screen.availHeight > screen.availWidth) {document.querySelectorAll('.doigt').forEach(setDoigtV);}
    else {document.querySelectorAll('.doigt').forEach(setDoigtH);}}
  
  function setDoigtV(item) {
      item.classList.remove('doigtH');
      item.classList.add('doigtV');}
  function setDoigtH(item) {
      item.classList.remove('doigtV');
      item.classList.add('doigtH');}