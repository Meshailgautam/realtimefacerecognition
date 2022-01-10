var accuracy = 0;
var object = 0;
function setup(){
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
imageClassifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gu6qF16Te/model.json", Modelloaded);

}
function draw(){
    image(video,0,0,300,300);
    imageClassifier.classify(video, gotresult);
}

function Modelloaded(){
    console.log("Model is loaded");
}
function gotresult(error, result) {
if(error){
    console.log(error);

}
else{
    console.log(result);
    document.getElementById("accuracy_value").innerHTML = result[0].confidence;
    document.getElementById("object_value").innerHTML = result[0].label;
}
}
