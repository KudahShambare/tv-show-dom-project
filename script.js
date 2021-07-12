//You can edit ALL of the code here

let allEpisodes = getAllEpisodes();

/*Call HTML Divs*/
let welcomeSection = document.getElementById("welcome");
const rootElem = document.getElementById("root");
/*create a form*/

let form = document.createElement("form");
welcomeSection.appendChild(form);

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
      "S" + episodeList[i].season + "E" + episodeList[i].number;
    if (episodeList[i].season < 10) {
      seasonAndEpisodeNumber =
        "S0" + episodeList[i].season + "E" + episodeList[i].number;
    }
    if (episodeList[i].number < 10) {
      seasonAndEpisodeNumber =
        "S0" + episodeList[i].season + "E0" + episodeList[i].number;
    }
    episodeName.innerHTML = episodeList[i].name + " " + seasonAndEpisodeNumber;

    //Giving an episode an image4
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
  let found = allEpisodes.filter(ep => {
    return ep.name.toLowerCase().includes(searchValue);
  })
  console.log(found);
  makePageForEpisodes(found)
})
/*Reset Button Functionality*/
resetButton.addEventListener("click", () => {
  window.location.reload();
})
