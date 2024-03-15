//https://teachablemachine.withgoogle.com/models/BBEFnvzig/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BBEFnvzig/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}