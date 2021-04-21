const player = document.querySelector('.player');
const video = player.querySelector('video')
const toggle = player.querySelector('.toggle');
const timerBar = player.querySelector('.progress__filled')
const sliders = player.querySelectorAll('.player__slider');
const moveSeconds = player.querySelectorAll('.player__button')
const progress = player.querySelector('.progress')

function handleTimerBar() {
    const percent = (video.currentTime / video.duration) * 100;
    timerBar.style.flexBasis = `${percent}%`;
}

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function sesiAzalt() {
    video[this.name] = this.value;
}
console.log(video.currentTime)
function plusSour() {
    video.currentTime += parseFloat(this.dataset.skip);
}



progress.addEventListener('click', function (e) {

    console.log(e.pageX + " " + video.duration)
    var pos = (e.pageX);
    video.currentTime = pos - 375;
});


moveSeconds.forEach(element => element.addEventListener('click', plusSour));
sliders.forEach(element => element.addEventListener('mousemove', sesiAzalt));
sliders.forEach(element => element.addEventListener('mousemove', sesiAzalt));





video.addEventListener('timeupdate', handleTimerBar);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

