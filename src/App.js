import { useState, useEffect } from 'react';
import { to2charString } from './utils.js';
import StopwatchDisplay from './components/StopwatchDisplay';
import ButtonComponent from './components/ButtonComponent';
import LapLog from './components/LapLog';

let timerRunning = false;
let haveLapInfoToDisplay = false;
let lapTimesOnLoading = [];
if (localStorage.getItem('lapTimesLocal') !== null && localStorage.getItem('lapTimesLocal') !== 'undefined') {
    haveLapInfoToDisplay = true;
    lapTimesOnLoading = JSON.parse(localStorage.getItem('lapTimesLocal'));
}

let elapsedCentiseconds = 0;
let startPoint;
function defineStartPoint() {
    startPoint = Date.now() - (elapsedCentiseconds * 10);
}

function App() {
    const [centisecs, setCentisecs] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [hours, setHours] = useState('00');
    const [lapTimes, setLapTimes] = useState(lapTimesOnLoading);

    function recordLapTime() {
        if (timerRunning === false) return;
        haveLapInfoToDisplay = true;
        const newLapTime = `${hours} : ${minutes} : ${seconds} : ${centisecs}`;
        setLapTimes([...lapTimes, newLapTime]);
    }

    useEffect(() => {
        localStorage.setItem('lapTimesLocal', JSON.stringify(lapTimes));
    }, [lapTimes]);

    function runTimer() {
        if (timerRunning === true) return; // prevents the function running simultaneously with itself.
        timerRunning = true;
        defineStartPoint();
        const runInterval = window.setInterval(() => {
            if (timerRunning === false) {
                window.clearInterval(runInterval);
            } else {
                elapsedCentiseconds = Math.floor((Date.now() - startPoint) / 10);
                let remainder = elapsedCentiseconds;

                let minuteNum = 0;
                let secondNum = 0;
                let centisecNum = 0;
                let hourNum = 0;

                while (remainder >= 360000) {
                    hourNum++;
                    remainder -= 360000;
                }
                while (remainder >= 6000) {
                    minuteNum++;
                    remainder -= 6000;
                }
                while (remainder >= 100) {
                    secondNum++;
                    remainder -= 100;
                }
                centisecNum = remainder;

                const centisecString = to2charString(centisecNum);
                const secondString = to2charString(secondNum);
                const minuteString = to2charString(minuteNum);
                const hourString = to2charString(hourNum);

                setCentisecs(centisecString);
                setSeconds(secondString);
                setMinutes(minuteString);
                setHours(hourString);

                if (elapsedCentiseconds > 35999999) startPoint = Date.now(); // Restart if reach 100 hours.
            }
        },
        10);
    }

    function stopTimer() {
        timerRunning = false;
    }

    function clearTimer() {
        stopTimer();
        elapsedCentiseconds = 0;
        setCentisecs('00');
        setSeconds('00');
        setMinutes('00');
        setHours('00');
        clearLaps();
    }

    function clearLaps() {
        haveLapInfoToDisplay = false;
        setLapTimes([]);
    }

    return (
        <div id="app">
            <StopwatchDisplay 
                centisecsDisplayed={centisecs} 
                secondsDisplayed={seconds} 
                minutesDisplayed={minutes} 
                hoursDisplayed={hours}
            />
            <ButtonComponent 
                runTimer={runTimer} 
                stopTimer={stopTimer}
                clearTimer={clearTimer} 
                recordLapTime={recordLapTime} 
                clearLaps={clearLaps} 
            />
            {
              haveLapInfoToDisplay
              &&
              <LapLog 
                  lapTimes={lapTimes}
              />
            }
        </div>
    );
}

export default App;
