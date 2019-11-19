// Set constraints for the video stream such as front view camera and no audio recording
var constraints = {video: { facingMode: "user" }, audio: false };

// Define constants for camera elements
const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger")

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    // Set camera sensor for picture taking equal to video stream
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    // Create image
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    // direct to taken image to image/webp uri
    cameraOutput.src = cameraSensor.toDataURL("image/jpeg");

    // Add to "taken" class for zoomout snapshot effect .See css for "taken" class to adjust picture dimensions
    // cameraOutput.classList.add("taken");



    //** Testing code...


    var image = cameraOutput.src;
    // SET FORM VALUE TO BASE 64 URI THEN POST TO FLASK ENDPOINT
    var posted = document.getElementById('picpost');
    posted.setAttribute('value', image);
    document.datauri.submit();
    
    // Uncomment to download pic locally
    // var link = document.getElementById('link');
    // link.setAttribute('download', 'TestPic.jpeg');
    // link.setAttribute('href', image);
    // link.click();


};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);