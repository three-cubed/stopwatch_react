const LapLog = (props) => {

    return (
        <>
            <br />
                {props.lapTimes.map((lapTime) => (
                    <h5 key={lapTime}>{lapTime}</h5>
                ))}
            <br />
        </>
    )
}

export default LapLog;
