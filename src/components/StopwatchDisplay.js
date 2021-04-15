const StopwatchDisplay = (props) => {

    return (
        <div id='stopWatchDisplay'>
            <p>
            &emsp;
            <span id='hourDisplay'>{props.hoursDisplayed}</span>
            &ensp;:&ensp;
            <span id='minuteDisplay'>{props.minutesDisplayed}</span>
            &ensp;:&ensp;
            <span id='secondDisplay'>{props.secondsDisplayed}</span>
            &ensp;:&ensp;
            <span id='centisecDisplay'>{props.centisecsDisplayed}</span>
            &emsp;
            </p>
        </div>
    )
}

export default StopwatchDisplay;
