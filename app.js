var videoTrack;

function init(){
    navigator.getUserMedia =    navigator.getUserMedia || 
                                navigator.webkitGetUserMedia ||
                                navigator.mozGetUserMedia || 
                                navigator.msGetUserMedia;
}

var errorCallback = function(e) {
    console.log('Reeeejected!', e);
  };


function startCamera(){
    
    
    var videoOutput = document.getElementById("videoOutput");

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