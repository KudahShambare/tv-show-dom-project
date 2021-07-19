//You can edit ALL of the code here

/*Fetch Data From API*/
/*
var allEpisodes = [];
function fetchFromAPI() {
  fetch("https://api.tvmaze.com/shows/82/episodes")
    .then((response) => {
      response.json()
    })
    .then(data => processData(data))
    .catch((error) => {
      console.log(error);
    });
}
fetchFromAPI();
*/
let allEpisodes = getAllEpisodes();

function processData(info) {
  for (let i = 0; i < info.length; i++){
    allEpisodes[i] = info[i];
  }
  console.log(info[0]);
}

//let allEpisodes = getAllEpisodes();

/*Call HTML Divs*/
let welcomeSection = document.getElementById("welcome");
const rootElem = document.getElementById("root");

/*create a form*/
let form = document.createElement("form");
welcomeSection.appendChild(form);

let numberOfMatches = document.createElement("div");
form.appendChild(numberOfMatches);

/*Create a select*/
let select = document.createElement("select");
form.appendChild(select);

/*create a search box*/
let searchBox = document.createElement("input");
searchBox.setAttribute("placeholder", "Search Here");
form.appendChild(searchBox);

/*Make a reset button*/
let resetButton = document.createElement("button");
resetButton.innerHTML = "Search Bar Reset";
form.appendChild(resetButton);

/*Page Display*/
function makePageForEpisodes(episodeList) {
  rootElem.innerHTML = "";
  for (let i = 0; i < episodeList.length; i++) {
    //A container for a single episode
    let episodeFrame = document.createElement("section");
    episodeFrame.id = "episode-frame";

    // Episode title, season number and episode number
    let episodeName = document.createElement("h4");
    episodeFrame.appendChild(episodeName);

    // Episode Image
    let episodeImage = document.createElement("img");
    episodeImage.id = "image";
    episodeFrame.appendChild(episodeImage);

    //Episode Description
    let episodeDescription = document.createElement("div");
    episodeDescription.innerHTML = episodeList[i].summary;
    episodeDescription.style.justifyItems = "center";
    episodeFrame.appendChild(episodeDescription);
    episodeDescription;
    rootElem.appendChild(episodeFrame);

    /*Formatting Seasons and Episodes Numbers*/

    let seasonAndEpisodeNumber =
      "S" +
      formartSeason(episodeList[i].season) +
      "E" +
      formartSeason(episodeList[i].number);
    episodeName.innerHTML = episodeList[i].name + " " + seasonAndEpisodeNumber;

    //Giving an episode an image
    episodeImage.src = episodeList[i].image.medium;
  }
}
makePageForEpisodes(allEpisodes);
/*Search Box Functionality*/

/* Displaying Search Results*/
let matches = document.createElement("h3");
welcomeSection.appendChild(matches);

searchBox.addEventListener("keyup", (e) => {
  let searchValue = e.target.value.toLowerCase();
  let found = allEpisodes.filter((ep) => {
    return (
      ep.name.toLowerCase().includes(searchValue) ||
      ep.summary.toLowerCase().includes(searchValue)
    );
  });
  console.log(found.length);
  numberOfMatches.innerHTML = found.length+"/"+allEpisodes.length+" matches";
  makePageForEpisodes(found);
});
/*Reset Button Functionality*/
resetButton.addEventListener("click", () => {
  window.location.reload();
});
/*Add options on select*/

allEpisodes.map((ep) => {
  let option = document.createElement("option");
  select.appendChild(option);
  option.innerHTML = `S${formartSeason(ep.season)}${formartSeason(
    ep.number
  )} - ${ep.name}`;
});
/*On Selection*/

select.addEventListener("click", (e) => {
  let choice = e.target.value.toLowerCase();
  console.log(choice);
  let choiceArray = choice.split(" ");
  let myArray = choiceArray.slice(2);
  let name = myArray.join(" ");

  
  allEpisodes.forEach(elem => {
    if(elem.name.toLowerCase().includes(name))
    makePageForEpisodes([elem])
  })
  

});

/*Formart Season Function*/
function formartSeason(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
