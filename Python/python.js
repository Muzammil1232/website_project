let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'YOUR_VIDEO_ID',  // Replace with your YouTube video ID
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        trackProgress();
    }
}

function trackProgress() {
    const duration = player.getDuration();
    const currentTime = player.getCurrentTime();
    const percentage = (currentTime / duration) * 100;

    console.log(`Video Progress: ${percentage.toFixed(2)}%`);

    // Update a progress bar on your website
    updateProgressBar(percentage);
}

function updateProgressBar(percentage) {
    const progressBar = document.getElementById('progressBar');  // Progress bar element
    progressBar.style.width = percentage + '%';
}


function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        trackProgress();
    } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        // You can stop progress tracking here if you want
    }
}
