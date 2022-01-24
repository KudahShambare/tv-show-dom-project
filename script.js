//Getting all episodes from episode.js file

let allEpisodes = getAllEpisodes();
console.log(allEpisodes);



//Get the episode container
const episodesContainer = document.getElementById("episodesContainer");
//Create a function to format numbers less than 10 into 2 digit numbers

const numberConverter = (num) => {
  if (num < 10) {
    return "0" + num;
  } else return num;
};

//A function to enable us to rerender the details with different info
const createEpisodeTemplate = (episode) => {
  //Create a section to store each episode detail
  const episodeDetails = document.createElement("section");
  episodeDetails.id = "episodeDetails";
  const episodeImage = document.createElement("img");
  const episodeInfo = document.createElement("section");
  //Episode Info
  const episodeNameAndCode = document.createElement("h4");
  const episodeSummary = document.createElement("p");
  //Copyrights
  const copyrights = document.createElement("p");
  copyrights.id = "copyrights";

  episodesContainer.appendChild(episodeDetails);
  episodeDetails.appendChild(episodeImage);
  episodeDetails.appendChild(episodeInfo);
  episodeInfo.appendChild(episodeNameAndCode);
  episodeInfo.appendChild(episodeSummary);
  episodeInfo.appendChild(copyrights);

  //Asign values to the template
  episodeImage.src = episode.image.medium;
  episodeNameAndCode.innerHTML =
    episode.name +
    " -S" +
    numberConverter(episode.season) +
    "E" +
    numberConverter(episode.number);
  episodeSummary.innerHTML = episode.summary;
  copyrights.innerHTML =
    " The contents displayed on this episode was extracted from:  " +
    episode.url;
};

//Loop through the episodes to display them
const display = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      createEpisodeTemplate(arr[i]);
    }
  };
   /*Render Episodes Function*/


  //Search Functionality
const searching = (arr) => {
    const search = document.getElementById("search");
    search.addEventListener("keyup", (e) => {
      const searchValue = e.target.value.toLowerCase();
      let filtered=arr.filter((val)=>{
          return val.name.toLowerCase().includes(searchValue) || val.summary.toLowerCase().includes(searchValue);
      })
      console.log(filtered);
      display(filtered);

    })
  };
  searching(allEpisodes);
  
//initial load

window.addEventListener("load",()=>{
  display(allEpisodes);

})
