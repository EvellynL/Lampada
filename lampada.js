const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1;
}


function lampOn(){
    if (!isLampBroken()){
    lamp.src = 'ligada.jpg';
    }
}

function lampOff(){
    if (!isLampBroken()){
    lamp.src = 'desligada.jpg'
    }
}

function lampQue(){
    lamp.src = 'quebrada.jpg';
   
}




ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);
lamp.addEventListener('click', lampQue);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
