//Getting all episodes from episode.js file
const allEpisodes=getAllEpisodes();
console.log(allEpisodes);

//Get the episode container
const episodesContainer=document.getElementById("episodesContainer");
 //A function to enable us to rerender the details with different info
 const createEpisodeTemplate=(episode)=>{
     //Create a section to store each episode detail
const episodeDetails=document.createElement("section");
episodeDetails.id="episodeDetails"
const episodeImage=document.createElement("img");
const episodeInfo=document.createElement("section");
//Episode Info
const episodeName=document.createElement("h4");
const seasonNumber=document.createElement("h4");
const episodeNumber=document.createElement("h4");
const episodeSummary=document.createElement("p");

    episodesContainer.appendChild(episodeDetails);
    episodeDetails.appendChild(episodeImage);
    episodeDetails.appendChild(episodeInfo);
    episodeInfo.appendChild(episodeName);
//Asign values to the template
    episodeImage.src=episode.image.medium;
    episodeName.innerHTML=episode.name;
 }

//Loop through the episodes to display them

for(let i=0;i<allEpisodes.length;i++){
    createEpisodeTemplate(allEpisodes[i]);
}