//Getting all episodes from episode.js file
const allEpisodes = getAllEpisodes();
console.log(allEpisodes);

//Get the episode container
const episodesContainer = document.getElementById("episodesContainer");
//Create a function to format numbers less than 10 into 2 digit numbers

const numberConverter=(num)=>{
if(num<10){
    return "0"+num
}
else return num;
}

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
  const copyrights=document.createElement("p");
  copyrights.id="copyrights"

  episodesContainer.appendChild(episodeDetails);
  episodeDetails.appendChild(episodeImage);
  episodeDetails.appendChild(episodeInfo);
  episodeInfo.appendChild(episodeNameAndCode);
  episodeInfo.appendChild(episodeSummary)
  episodeInfo.appendChild(copyrights);

  //Asign values to the template
  episodeImage.src = episode.image.medium;
  episodeNameAndCode.innerHTML = episode.name +" -S"+numberConverter(episode.season)+"E"+numberConverter(episode.number);
  episodeSummary.innerHTML=episode.summary;
  copyrights.innerHTML= ' The contents displayed on this episode was extracted from:  '+episode.url
};

//Loop through the episodes to display them

for (let i = 0; i < allEpisodes.length; i++) {
  createEpisodeTemplate(allEpisodes[i]);
}
