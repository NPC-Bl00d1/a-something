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
    
    speakData1 = "the prediction is " + prediction1;
    
    utterThis = new SpeechSynthesisUtterance(speakData1);
    
    synth.speak(utterThis);
    
    }

        
        function check(){
           
            img = document.getElementById("imgresult");
        
            classifier.classify(img, gotResult);
        }
        
        function gotResult(error, results){
        
        if(error){
        
        console.error(error);
        
        }
        else{
        
        console.log(results);
        
        document.getElementById("result_name").innerHTML = results[0].label;
        
        prediction1 = results[0].label;
    
        
        speak();
        
        if(results[0].label == "Thumbs up"){
        
        document.getElementById("result_img").innerHTML = "&#128077;";
        
        }
        else if(results[0].label == "Ok"){
        
            document.getElementById("result_img").innerHTML = "&#128076;";
        
        }
          else if(results[0].label == "Stop"){
        
            document.getElementById("result_img").innerHTML = "&#9995;";
        
        }
          else if(results[0].label == "Pointing"){
        
            document.getElementById("result_img").innerHTML = "&#9755;";
        
        }
        else{
        
            document.getElementById("result_img").innerHTML = "&#9994;";
        
        }
        
        
        
        }
        
        }