let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours(); //hora
    let minute = now.getMinutes(); //minutos
    let second = now.getSeconds(); // segundos

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // Analógico

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

// função pra ter o zero antes dos números abaixo de 10
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

// intervalo infinito
setInterval(updateClock, 1000);
updateClock(); // pra não ter "log" quando atualiza a tela