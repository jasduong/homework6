var video;
var vol;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var vol = document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector('#volumeSlider').addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	video.volume = this.value / 100;
	var vol = document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
});

document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is: " + video.playbackRate)
});

document.querySelector('#faster').addEventListener("click", function() {
	video.playbackRate *= 1.1;
	console.log("Speed is: " + video.playbackRate)
});

document.querySelector('#skip').addEventListener("click", function() {
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
		video.load();
		video.play()
	}
	else {
		video.currentTime += 5;
	}
});

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		let mute = document.querySelector('#mute').innerHTML = "Mute";
	}
	else {
		video.muted = true;
		let mute = document.querySelector('#mute').innerHTML = "Unmute";
	}
});

document.querySelector('#old').addEventListener("click", function() {
	video.classList.add('oldTime')
});

document.querySelector('#original').addEventListener("click", function() {
	video.classList.remove('oldTime')
});
