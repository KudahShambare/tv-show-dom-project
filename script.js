//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
 const rootElem = document.getElementById("root");
 
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
    episodeDescription.id="episode-descriptor"; 
    episodeFrame.appendChild(episodeDescription);
    rootElem.appendChild(episodeFrame);

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
    episodeImage.src = episodeList[i].image.medium;  
  }
 
}

window.onload = setup;

