const StopwatchDisplay = (props) => {

    return (
        <>
            <p>interval timer</p>
            <p>
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
