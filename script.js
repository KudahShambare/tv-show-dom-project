

//Getting all episodes from episode.js file

let allEpisodes = getAllEpisodes();

//Search Functionality (everything inside)
const search = document.getElementById("search");
let searching = (val) => {


/*Render Episodes Function*/
let render = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    createEpisodeTemplate(arr[i]);
  }
};


//Get the episode container
const episodesContainer = document.getElementById("episodesContainer");
//Create a function to format numbers less than 10 into 2 digit numbers

const numberConverter = (num) => {
  if (num < 10) {
    return "0" + num;
  } else return num;
};
//Hiding Function
let hide = (val) => {
  val.style.display = "none";
};
//Button Events For Hiding And Displaying All Episodes
let displayAll = document.getElementById("showAllEpisdes");
displayAll.addEventListener("click", () => {
  render(allEpisodes);
});
let hideAll = document.getElementById("hideAllEpisodes");
hideAll.addEventListener("click", () => {
  episodesContainer.style.display = "none";
  location.reload();
});

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

















  
  


  search.addEventListener("keyup", (e) => {
    //episodesContainer.style.display="none";
    let searchValue = e.target.value;
    // console.log(searchValue);
    let newArr = [];
    val.forEach((elem)=>{
    if(  elem.name.toLowerCase().includes(searchValue) ||
    elem.summary.toLowerCase().includes(searchValue)){
      newArr.push(elem)
    }
    allEpisodes=newArr;
    render(allEpisodes)

  })
    
 
  });
};

searching(allEpisodes)
