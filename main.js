var SpeechRecognition = window.webkitSpeechRecognition;

var Content;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{ 
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
  
    recognition.onresult = function(event) {
        console.log(event); 

        Content = event.results[0][0].transcript;

        Textbox.innerHTML = Content;
        console.log(Content);
        if(Content == "queso")
        {
            console.log(Content +"queso --- ");
            speak();
        }

}

function speak(){
    var synth=window.speechSynthesis;
    speak_data = "Tomando tu foto en 5 segundos"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    utterThis.lang = "es-MX";
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        img_id = "foto1";     
        take_selfie();
        speak_data = "tomando tu foto en 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        utterThis.lang = "es-MX";
        synth.speak(utterThis);
    },  5000);
    setTimeout(function()
    {
        img_id = "foto2";     
        take_selfie();
        speak_data = "tomando tu foto en 15 segundos";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        utterThis.lang = "es-MX";
        synth.speak(utterThis);
    },  10000);
    setTimeout(function()
    {
        img_id = "foto3";      
        take_selfie();
    },  15000);

}

camera = document.getElementById("camera");
Webcam.set({width:360, height:250, image_format:'png', png_quality:90});

function take_selfie()
{
    console.log(img_id)

    Webcam.snap(function(data_uri) {
        if(img_id=="foto1"){
            document.getElementById("result1").innerHTML = '<img id="foto1" src="'+data_uri+'"/>';
        }
        if(img_id=="foto2"){
            document.getElementById("result2").innerHTML = '<img id="foto2" src="'+data_uri+'"/>';
        }   
        if(img_id=="foto3"){
            document.getElementById("result3").innerHTML = '<img id="foto3" src="'+data_uri+'"/>';
        }     
    }); 
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
