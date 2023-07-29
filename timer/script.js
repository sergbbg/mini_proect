
/// секундомер  

const   startBtnSec = document.querySelector('.start-sec'),
        stopBtnSec = document.querySelector('.stop-sec'),
        resetBtnSec = document.querySelector('.reset-sec');

let hour = 00, minute = 00, second = 00, count = 00;

function startSec() {
  timerSec= true;
  stopWatch();
  startBtnSec.removeEventListener('click', startSec)
  
}
startBtnSec.addEventListener('click', startSec);
 

stopBtnSec.addEventListener('click', function () {
    timerSec = false;
    startBtnSec.addEventListener('click', startSec);
});

resetBtnSec.addEventListener('click', ()=>{
    timerSec = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    startBtnSec.addEventListener('click', startSec);
});


function stopWatch() {
    if (timerSec) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }

}

//timer

const   startBtnTimer = document.querySelector('.start-timer'),
        stopBtnTimer = document.querySelector('.stop-timer'),
        resetBtnTimer = document.querySelector('.reset-timer');

let secTimer = document.querySelector('.s-timer'),
    mintimer = document.querySelector('.min-timer'),
    hourtimer = document.querySelector('.hr-timer'),
    inputTimer = document.querySelectorAll('.input-timer'),
    inputSixty = document.querySelectorAll(".input-60");



    inputTimer.forEach((el)=>{
        el.addEventListener('input', function(){
           el.value = el.value.replace(/[^0-9]/g, ''); 
        })
    });

    inputTimer.forEach((el)=>{
        el.addEventListener('click', function(){
           el.select();
           timerT = false;
          startBtnTimer.addEventListener('click', startTimer);
        })
    });


    inputSixty.forEach((el)=>{
        el.addEventListener('input', function(){
           let numIp = Number(el.value);
           if( numIp > 60){
            el.value = '60';
           }
        })
        
    });

function startTimer(){
    timerT = true;
    stopTimer();
    startBtnTimer.removeEventListener('click', startTimer)
}
startBtnTimer.addEventListener('click', startTimer);


stopBtnTimer.addEventListener('click', function () {
        timerT = false;
    
        startBtnTimer.addEventListener('click',startTimer );
    });
    
resetBtnTimer.addEventListener('click', ()=>{
        timerT = false;
        secTimer.value = '00';
        mintimer.value = '00';
        hourtimer.value = '00';
 });

function stopTimer() {
    let s = Number(secTimer.value),
    m = Number(mintimer.value),
    h = Number(hourtimer.value);
    if (timerT) { 
       
        if( s >= 1){
            s--;
            if(s< 10){
                secTimer.value = '0' + s; 
            }else{
                secTimer.value = s;
            }
        
         }else if( m >=1){
             m--;

             if(m < 10){
                mintimer.value = "0" + m;
             }else{
              mintimer.value = m;  
             }
                secTimer.value = 60;
                
        }else if( h >=1 ){
            h--;
            mintimer.value = 60;
            secTimer.value = 60;
            hourtimer.value = h;
        } else if(s == 0){
            timerT = false;
        }
        setTimeout(stopTimer, 1000)
    };
}
