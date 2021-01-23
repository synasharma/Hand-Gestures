Webcam.set
({
width:350,
height:330,
dest_width:345,
dest_height:300,
image_format:'png',
png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function guess_pic()
{
    Webcam.snap(function (data_uri){
       document.getElementById("result").innerHTML="<img id='captured_pic'src="+data_uri+">";
    });
}

console.log("ml5.version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nDolTVZwU/model.json",modelLoaded);

function modelLoaded()
{
    console.log("Model has Loaded!")
}

function speak()
{
    var synth=window.speechSynthesis;
    var speak_data_1="The first prediction is"+prediction_1;
    var speak_data_2="The second prediction is"+prediction_2;
    var utterance= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterance);
}