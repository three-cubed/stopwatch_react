import { useState, useEffect } from 'react';
import { to2chars, checkNumOverflow } from './utils.js';
import StopwatchDisplay from './components/StopwatchDisplay';
import ButtonComponent from './components/ButtonComponent';
import LapLog from './components/LapLog';

let minuteNum = 0;
let secondNum = 0;
let centisecNum = 0;
let isGo = false;
let isLapInfoToDisplay = false;
let lapTimesStored = [];
if (localStorage.getItem('lapTimesLocal') !== null && localStorage.getItem('lapTimesLocal') !== 'undefined') {
        isLapInfoToDisplay = true;
        lapTimesStored = JSON.parse(localStorage.getItem('lapTimesLocal'));
}

function App() {
    const [centisecs, setCentisecs] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [lapTimes, setLapTimes] = useState(lapTimesStored);

    function recordLapTime() {
        if (isGo === false) return;
        isLapInfoToDisplay = true;
        let newLapTime = `${minutes}:${seconds}:${centisecs}`;
        setLapTimes([...lapTimes, newLapTime]);
    }

    useEffect(() => {
        localStorage.setItem('lapTimesLocal', JSON.stringify(lapTimes));
    }, [lapTimes])

    function runMe() {
        if (isGo === true) return; // prevents the function running simultaneously with itself.
        isGo = true;
        var runInterval = window.setInterval(function(){
                if (isGo === false) {
                    window.clearInterval(runInterval);
                } else {
                    centisecNum ++;
    
                    let numCheck = checkNumOverflow(centisecNum, secondNum, 100);
                    centisecNum = numCheck[0];
                    secondNum = numCheck[1];
    
                    numCheck = checkNumOverflow(secondNum, minuteNum, 60);
                    secondNum = numCheck[0];
                    minuteNum = numCheck[1];
    
                    let centisecString = to2chars(centisecNum);
                    let secondString = to2chars(secondNum);
                    let minuteString = to2chars(minuteNum);
    
                    setCentisecs(centisecString);
                    setSeconds(secondString);
                    setMinutes(minuteString);
                }
        },
        1);
    }

    function stopMe() {
        isGo = false;
    }

    function clearMe() {
        isGo = false;
        centisecNum = 0;
        secondNum = 0;
        minuteNum = 0;
        setCentisecs('00');
        setSeconds('00');
        setMinutes('00');
        clearLap();
    }

    function clearLap() {
        isLapInfoToDisplay = false;
        setLapTimes([]);
    }

    return (
        <div>
            <StopwatchDisplay 
                centisecsDisplayed={centisecs} 
                secondsDisplayed={seconds} 
                minutesDisplayed={minutes} 
            />
            <ButtonComponent 
                runMe={runMe} 
                stopMe={stopMe}
                clearMe={clearMe} 
                recordLapTime={recordLapTime} 
                clearLap={clearLap} 
            />
            {
              isLapInfoToDisplay
              &&
              <LapLog 
                  lapTimes={lapTimes}
              />
            }
        </div>
    );
}

export default App;
