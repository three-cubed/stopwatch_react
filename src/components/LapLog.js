const LapLog = (props) => {
    
    return (
        <div id='lapLog'>
                {props.lapTimes.map((lapTime) => (
                    <div className='individualLapTime' key={lapTime}>&emsp;{lapTime}&emsp;</div>
                ))}
        </div>
    )
}

export default LapLog;
