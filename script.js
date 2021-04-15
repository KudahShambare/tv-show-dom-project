//You can edit ALL of the code here
let allEpisodes = getAllEpisodes();
function setup() {
  makePageForEpisodes(allEpisodes);
}
 const rootElem = document.getElementById("root");
 
 
function makePageForEpisodes(episodeList) {
   
  for (let i = 0; i < episodeList.length; i++) {
    let episodeFrame = document.createElement("section"); //A container for a single episode
    episodeFrame.id = "episode-frame";
    let episodeName = document.createElement("h4"); // Episode title, season number and episode number
    episodeFrame.appendChild(episodeName);
    let episodeImage = document.createElement("img"); // Episode Image
    episodeImage.id = "image";
    episodeFrame.appendChild(episodeImage);
    let episodeDescription = document.createElement("div"); //Episode Description
    episodeDescription.innerHTML = episodeList[i].summary;
    episodeDescription.style.justifyItems = "center";
    episodeFrame.appendChild(episodeDescription);
    episodeDescription;
    rootElem.appendChild(episodeFrame);
    /*Formating Seasons and Episodes Numbers*/
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
    episodeImage.src = episodeList[i].image.medium;//Giving an episode an image
 
  }
  
    
}

window.onload = setup;

