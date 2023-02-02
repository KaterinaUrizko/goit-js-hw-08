
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlaying, 1000));

const STORAGE_KEY = 'videoplayer-current-time';

function onPlaying(e) {

    const playingTime = e.seconds;


    localStorage.setItem(STORAGE_KEY, playingTime);
};
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






    
    
