### Project overview
This application is a stopwatch which uses the React library.
The user can start, pause and clear the stopwatch.
The user can also record lap times.
Lap times are additionally stored in local storage, and so preserved in case the page is refreshed.

The watch uses the format 00 : 00 : 00 : 00, 
i.e. displays hours, minutes, seconds, and centiseconds.
On reaching 100 hours, the stopwatch will restart at zero and continue to run.

### vViewing the application online
Go to the deployment at `https://stopwatch-with-react.herokuapp.com/`.

### Setting up the application for yourself
To use this application, you must have installed Node.js.
Before first use, the command `npm install` must be used on the directory `stopwatch_react`.

### Running the application for yourself
Once this has been done, use `npm start` on the directory `stopwatch_react` to run the application.
Your browser should then automatically open and the application will be displayed and ready on local host port 3000. 
If, for some reason, this does not happen, you can manually open `http://localhost:3000` to view the application.
