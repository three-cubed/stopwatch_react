const ButtonComponent = (props) => {
    
    return (
        <div id ='buttonComponent'>
            <br />
            <button onClick={props.runTimer}>Start</button>
            <button onClick={props.stopTimer}>Stop</button>
            <button onClick={props.recordLapTime}>Record lap</button>
            <button className='btn-clr' onClick={props.clearTimer}>Clear all</button>
            <button className='btn-clr' onClick={props.clearLaps}>Clear laps</button>
            <br />
        </div>
    )
}

export default ButtonComponent;
