Webcam.set({
    width: 350, height: 300, image_format:"png", png_quality: 90
});
Webcam.attach("#camera");
function tss(){
    Webcam.snap(function(click){
        document.getElementById("tp").innerHTML="<img id='img1' src='"+click+"'>"
    });
}
console.log("Version of ML5", ml5.version);
var io=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9-M8lyNEP/model.json", ml);
function ml(){
    console.log("Model Loaded...")
}
function check()
{
    var img=document.getElementById("img1");
    io.classify(img, gr);
}
function gr(error, result)
{
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("span1").innerHTML=result[0].label;
        document.getElementById("span2").innerHTML=result[0].confidence.toFixed(5);
    }
}
