const turnOnOff = document.getElementById('turnOnOff');
//const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken (){
   return lamp.src.indexOf('quebrada') > -1 //Essa condição indica que a imgagem está quebrada.
   // IndexOf (Faz uma varredura em uma string procurando outra string)
   // Então procuro se dentro do SRC tem a palavra quebrada, se achar o retorno é um número maior que "-1" ou seja TRUE, se não encontrar é -1 ou seja FALSE
}

function lampOn() {
   if( !isLampBroken() ){
      lamp.src = "img/ligada.jpg";
      turnOnOff.textContent = "Desligar";
   }
}

function lampOff() {
   if( !isLampBroken() ){
      lamp.src = "img/desligada.jpg"
      turnOnOff.innerHTML = "Ligar";
   }
}

function lampBroken() {
   lamp.src = "img/quebrada.jpg"
}

function lampOnOff() {
   if(turnOnOff.textContent == "Ligar" && !isLampBroken()) {
      lampOn();
      turnOnOff.textContent = "Desligar";
   }else if(turnOnOff.textContent == "Desligar" && !isLampBroken()) {
      lampOff();
      turnOnOff.textContent = "Ligar";
   }
}

turnOnOff.addEventListener('click', lampOnOff);
//turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);