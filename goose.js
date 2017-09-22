navigator.webkitGetUserMedia( { audio: true }, function(stream) { 
  stream.stop();
  let recognition = new webkitSpeechRecognition();
  recognition.onresult = function (event)  {
  console.log(event);
  }

  recognition.onerror = function (event) {
  console.log(event);
  }

  recognition.start();  

  }, function() { console.log("other error")});

