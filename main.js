function role(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LcN43bDNU/model.json",modelready);


}

function modelready(){
    classifier.classify(gotresult);
}

function gotresult(error,result){
if(error){
    console.error(error);
}
else{
    console.log(result);
    document.getElementById("sound").innerHTML = "I can hear this -"+result[0].label;
    document.getElementById("acuracy").innerHTML = "Accuracy -"+(result[0].confidence*100).toFixed(2)+"%";

    img1 = document.getElementById("a1");
    img2 = document.getElementById("a2");
    img3 = document.getElementById("a3");
    img4 = document.getElementById("a4");

if(result[0].label == "clap"){
    img1.src = "aliens-01.gif";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.png";

}
else if(result[0].label == "snap fingers"){
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.gif";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.png";

}
else if(result[0].label == "Dog"){
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.gif";
    img4.src = "aliens-04.png";

}
else if(result[0].label == "Crying baby"){
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.gif";

}
}
}

















