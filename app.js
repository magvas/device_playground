var videoTrack = null;
var videoOutput = null;
var canvas = null;
var ctx = null;

function init(){
    navigator.getUserMedia =    navigator.getUserMedia || 
                                navigator.webkitGetUserMedia ||
                                navigator.mozGetUserMedia || 
                                navigator.msGetUserMedia;
    
    videoOutput = document.getElementById("videoOutput");
    videoOutput.addEventListener("click",capture,false);    
    canvas = document.getElementById('canvasOutput');
    ctx = canvas.getContext('2d');

}

var errorCallback = function(e) {
    console.log('Reeeejected!', e);
  };


function startCamera(){    
    if (navigator.getUserMedia) {
        navigator.getUserMedia({audio:false, video:true}, (stream) => {
            videoOutput.src = window.URL.createObjectURL(stream);
            videoTrack = stream.getVideoTracks()[0];
        },errorCallback);

    }
}

function stopCamera() {
    videoTrack.stop();
}

function capture() {
    if (videoTrack) {
        ctx.drawImage(videoOutput, 0, 0);
        // "image/webp" works in Chrome.
        // Other browsers will fall back to image/png.
        document.getElementById('imgOutput').src = canvas.toDataURL('image/webp');
  
    }
}