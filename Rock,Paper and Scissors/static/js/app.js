//  Rock,Paper and Scissors

const reload = document.querySelector(".btn");
// Creat a function which is link with div of HTML
function rpsgame(yourchoice) {
  console.log(yourchoice);

  var humanchoice, botchoice;
  humanchoice = yourchoice.id;
  botchoice = numbertochoice(randomnumber());
  console.log("Computer choice: ", botchoice);

  results = decidewinner(humanchoice, botchoice);
  console.log(results);

  message = finalmessage(results);
  console.log(message);
  rpsfrontend(yourchoice.id, botchoice, message);
}

// Generate random number by computer between 0 to 2
function randomnumber() {
  return Math.floor(Math.random() * 3);
}
function numbertochoice(number) {
  return ["rock", "paper", "scissors"][number];
}

// Create a function to decide winner
function decidewinner(yourchoice, computerchoice) {
  var rspdatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  var yourscore = rspdatabase[yourchoice][computerchoice];
  var computerscore = rspdatabase[computerchoice][yourchoice];
  return [yourscore, computerscore];
}

// Create final message which declare who is the winner (human/computer)
function finalmessage([yourscore, computerscore]) {
  if (yourscore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourscore === 0.5) {
    return { message: "You tied!", color: "orange" };
  } else {
    return { message: "You win!", color: "green" };
  }
}

// Create a function where final result is shown in web page (HTML)
function rpsfrontend(humanimagechoice, botimagechoice, finalmessage) {
  var imagesdatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // removing all after clicking to show result
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  // Creating new div for displaying result
  let humandiv = document.createElement("div");
  let botdiv = document.createElement("div");
  let messagediv = document.createElement("div");

  // Connect images along with message for it to appear as a final result
  humandiv.innerHTML =
    "<img src='" +
    imagesdatabase[humanimagechoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
  messagediv.innerHTML =
    "<h1 style='color:" +
    finalmessage["color"] +
    ";font-size:60px; padding:30px;'>" +
    finalmessage["message"] +
    "</h1>";
  botdiv.innerHTML =
    "<img src='" +
    imagesdatabase[botimagechoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

  // Linking result image along with message which will appear in web page
  document.getElementById("flex-box-rps-div").appendChild(humandiv);
  document.getElementById("flex-box-rps-div").appendChild(messagediv);
  document.getElementById("flex-box-rps-div").appendChild(botdiv);
  reload.classList.remove('hide');
  reload.addEventListener("click",function (e) {
    location.reload();
  })
}
