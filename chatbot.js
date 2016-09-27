function askQuestion() {
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + " " + "<br>"; 
}

var responses = {
  "how are you?" : "I am Stinky. Thank you for asking. If you would like to ask StinkyJoe more questions that is ok.",
  "what is your age" : "I am eternal.",
  "what is your name" : "Stinky Joe"
}
