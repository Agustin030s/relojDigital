const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');
const horas = document.getElementById('horas')
const ampm = document.getElementById('ampm');
const fecha = document.getElementById('fecha');

let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHoras = 0;

const incrementarSegundos = () =>{
    segundos.innerText = contadorSegundos;
    esAMoPM();
    if(contadorSegundos <= 60){
        contadorSegundos++;
        segundos.innerText = contadorSegundos;
    }else{
        contadorSegundos = 0;
        segundos.innerText = 0;

        incrementarMinutos();
    }
}

const incrementarMinutos = () => {
    contadorMinutos++;
    
    if (contadorMinutos <= 60) {
        minutos.innerText = ' ' + contadorMinutos + ' : ';
    } else {
        contadorMinutos = 0;
        
        incrementarHoras();
    }
}

const incrementarHoras = () => {
    contadorHoras++;
    
    if (contadorHoras <= 24) {
        horas.innerText = ' ' + contadorHoras + ' : ';
    } else {
        contadorHoras = 0;
    }
}

const esAMoPM = () =>{
    if(contadorHoras >= 0 && contadorHoras <= 12){
        ampm.innerText = 'AM';
    }else{
        ampm.innerText = 'PM';
    }
}

const setFecha = () =>{
    const fechaActual = new Date();

    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth();
    const dia = fechaActual.getDay();

    fecha.innerText = `${dia} / ${mes} / ${año}`;

}

setFecha();
window.setInterval(incrementarSegundos, 1000);
