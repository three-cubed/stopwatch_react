const StopwatchDisplay = (props) => {

    return (
        <>
            <p>Stopwatch</p>
            <p>
            <span id='hourDisplay'>{props.hoursDisplayed}</span>
            &ensp;:&ensp;
            <span id='minuteDisplay'>{props.minutesDisplayed}</span>
            &ensp;:&ensp;
            <span id='secondDisplay'>{props.secondsDisplayed}</span>
            &ensp;:&ensp;
            <span id='centisecDisplay'>{props.centisecsDisplayed}</span>
            </p>
        </>
    )
}

export default StopwatchDisplay;
