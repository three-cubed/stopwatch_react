const ButtonComponent = (props) => {

    return (
        <>
            <br />
            <button onClick={props.runMe}>GO</button>
            <button onClick={props.stopMe}>STOP</button>
            <button onClick={props.clearMe}>CLEAR</button>
            <button onClick={props.recordLapTime}>LAP</button>
            <button onClick={props.clearLap}>LAP CLEAR</button>
            <br />
        </>
    )
}

export default ButtonComponent;
