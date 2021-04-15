const ButtonComponent = (props) => {

    return (
        <div id ='buttonComponent'>
            <br />
            <button onClick={props.runMe}>Start</button>
            <button onClick={props.stopMe}>Pause</button>
            <button onClick={props.recordLapTime}>Record lap</button>
            <button className='btn-clr' onClick={props.clearMe}>Clear all</button>
            <button className='btn-clr' onClick={props.clearLap}>Clear laps</button>
            <br />
        </div>
    )
}

export default ButtonComponent;
