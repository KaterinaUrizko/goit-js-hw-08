
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlaying, 1000));

const STORAGE_KEY = 'videoplayer-current-time';

function onPlaying(e) {

    const playingTime = e.seconds;

    // const time = player.getCurrentTime();

    localStorage.setItem(STORAGE_KEY, playingTime);
};
// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });
const currentTime = localStorage.getItem(STORAGE_KEY);

const startTime = JSON.parse(currentTime );
console.log(startTime);

 player.setCurrentTime(currentTime).then(function(seconds) {
 }).catch(function(error) {
     switch (error.name) {
       case 'RangeError':
            break;
        default:
            break;
     }
 });

// import Player from '@vimeo/player';

  
// const iframe = document.querySelector('iframe');
// const iframePlayer = new Vimeo.Player(iframe);

// const CURRENT_TIME = "videoplayer-current-time";


// player.setCurrentTime(JASON.parse(CURRENT_TIME)).then(function(seconds) {
//    console.log("CurrentTime")
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

// визначити поточний час 
// записати ці дані в localStorage
// повернути ці дані з LocalSTorage при запуску player SetCurrentTime 
// (JSON.parse(localStorage.setItem(time.Now.seconds)))



    
    
