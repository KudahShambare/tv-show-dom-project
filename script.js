//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
 const rootElem = document.getElementById("root");
 
  

function makePageForEpisodes(episodeList) {
    let searchResults = document.querySelector("input");
    let searchValue = searchResults.value;
    console.log(searchValue);
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
    /*Search Button Functionality */
  let searchButton = document.querySelector("button");
let user
  searchButton.addEventListener("click", function(){
    /*episodeList.filter((elem)=>{
      return elem.includes()
    })*/
    
  });
  
  }
}

window.onload = setup;

