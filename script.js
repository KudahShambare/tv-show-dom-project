//You can edit ALL of the code here

let allEpisodes = getAllEpisodes();
function setup() {
  alert("This page is not responsive. For a better view, use a bigger screen.");
  makePageForEpisodes(allEpisodes);
}

/*Call HTML Divs*/
let welcomeSection = document.getElementById("welcome");
const rootElem = document.getElementById("root");
/*create a form*/
let form = document.createElement("form");
welcomeSection.appendChild(form);
/*create a search box*/
let searchBox = document.createElement("input");
form.appendChild(searchBox);

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

    //Giving an episode an image
    episodeImage.src = episodeList[i].image.medium;

    /*Search Box Functionality*/

    /*
    searchBox.addEventListener("keyup", function () {
      let searchResult = searchBox.value.toLowerCase();
      let matches=[];
      if (
     
        (!allEpisodes[i].name.toLowerCase().includes(searchResult) || (!allEpisodes[i].summary.toLowerCase().includes(searchResult))) 
      ) {
    
        episodeFrame.style.display = "none";
      }   
    });
    */
  }
}
searchBox.addEventListener("keyup", (e) => {
  let filteredArray = allEpisodes.filter((obj) => {
    return obj.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  console.log(filteredArray);
  makePageForEpisodes(filteredArray);
});

window.onload = setup;
