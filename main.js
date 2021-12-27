//https://teachablemachine.withgoogle.com/models/UEg9QeGbG/

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
    });
    
    var camera = document.getElementById("camera");
    
    Webcam.attach(camera);
    
    function takePic(){
    
    Webcam.snap(function(data_uri) {
    
    document.getElementById("result").innerHTML = "<img id='imgresult' src='" +data_uri+ "'>";
    
    })
    
    
    }
    
    console.log("ml5 version = " , ml5.version);
    
    
    var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UEg9QeGbG/model.json", modelLoaded);
    
    function modelLoaded(){
    
    console.log("model loaded, have party")
    
    }
    
    function speak(){
    
    synth = window.speechSynthesis;
    
    speakData1 = "the first prediction is " + prediction1;
    speakData2 = "and the second prediction is " + prediction2;
    
    utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    
    synth.speak(utterThis);
    
    }