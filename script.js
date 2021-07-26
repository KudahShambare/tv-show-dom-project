//You can edit ALL of the code here

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

/*Create a show selector*/
let showSelector = document.createElement("select");
form.appendChild(showSelector);

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

/*Search Box Functionality*/

/* Displaying Search Results*/
function display(arr) {
  let matches = document.createElement("h3");
  welcomeSection.appendChild(matches);

  searchBox.addEventListener("keyup", (e) => {
    let searchValue = e.target.value.toLowerCase();
    let found = arr.filter((ep) => {
      return (
        ep.name.toLowerCase().includes(searchValue) ||
        ep.summary.toLowerCase().includes(searchValue)
      );
    });

    numberOfMatches.innerHTML = found.length + "/" + arr.length + " matches";
    makePageForEpisodes(found);
  });
}

/*Reset Button Functionality*/
resetButton.addEventListener("click", () => {
  window.location.reload();
});
/*Add options on select*/
function selectionOptions(arr) {
  arr.map((ep) => {
    let option = document.createElement("option");
    select.appendChild(option);
    option.innerHTML = `S${formartSeason(ep.season)}${formartSeason(
      ep.number
    )} - ${ep.name}`;
  });
}

/*On Selection*/
function selecting(val) {
  select.addEventListener("click", (e) => {
    let choice = e.target.value.toLowerCase();
    console.log(choice);
    let choiceArray = choice.split(" ");
    let myArray = choiceArray.slice(2);
    let name = myArray.join(" ");

    val.forEach((elem) => {
      if (elem.name.toLowerCase().includes(name)) makePageForEpisodes([elem]);
    });
  });
}

/*Formart Season Function*/
function formartSeason(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
/*Level 350*/

/*Fetch Data From API*/
function fetchEpisodes(dataArr) {
  makePageForEpisodes(dataArr);
  display(dataArr);
  selectionOptions(dataArr);
  selecting(dataArr);
  fetchShow(dataArr)
}

fetch("https://api.tvmaze.com/shows/82/episodes")
  .then((response) => {
    return response.json();
  })
  .then((data) => fetchEpisodes(data))
  .catch((error) => {
    console.log(error);
  });

/*Level 400*/
/*


When a show is selected, your app should display the episodes for that show as per the earlier levels of this challenge, except that it should first fetch the episode list from the API - see below
You can get the list of shows by loading shows.js in your index.html and using the provided function: getAllShows()
Ensure that your search and episode selector controls still work correctly when you switch shows.
*/
let allShows = getAllShows();

/*Show Select Options*/

function showSelectOption() {
  allShows.map((show) => {
    let option = document.createElement("option");
    option.innerHTML = show.name;
    showSelector.appendChild(option);
  });
}
showSelectOption();
/********************************************************************************************* */
/*Level 500 Page Display*/
function displayShow(arr) {
  let container = document.createElement("div");
  container.id = "showContainer";
  rootElem.appendChild(container)
  let showDiv = document.createElement("div");
  rootElem.appendChild(showDiv)
  let home = document.createElement("button");
  showDiv.appendChild(home);
  home.innerHTML = "Back";
  for (let i = 0; i < arr.length; i++){
    let singleShow = document.createElement("div");
    singleShow.id="singleShow"
    container.appendChild(singleShow);
//Show Name
    let showName = document.createElement("h2");
    showName.innerHTML += arr[i].name;
    singleShow.appendChild(showName);

//Show image
    let showPhoto = document.createElement("img");
    showPhoto.src = arr[i].image.medium;
    //Show rating
    let rating = document.createElement("p");
    //rating.innerHTML +=`Rating: ${arr[i].rating.average}`;
    //Show status
    let status = document.createElement("p");
    status.innerHTML = "Status: "+arr[i].status;
  //  Show runtime
    let runTime = document.createElement("p");
    runTime.innerHTML = "Runtime: "+arr[i].runtime+" mins";
    //Show genre
    let genre = document.createElement("p");
    genre.innerHTML = "Genre:" ; 

    singleShow.appendChild(showPhoto);
    singleShow.appendChild(rating);
    singleShow.appendChild(status);
    singleShow.appendChild(runTime);
    singleShow.appendChild(genre);

    home.addEventListener("click", () => {
      window.location.reload();
    })
   }

}
function fetchShow(dataArr) {
  displayShow(dataArr);
  display(dataArr);
  selectionOptions(dataArr);
  selecting(dataArr);
  
}
/************************************************************************************************* */

/*Show Selection Click Event*/
showSelector.addEventListener("click", (e) => {
  let ourShow = e.target.value;
  let filteredShows = allShows.find(
    (show) => show.name.toLowerCase() === ourShow.toLowerCase()
  );
  let ourId = filteredShows.id;
  makePageForEpisodes([]);
  fetch(`https://api.tvmaze.com/shows/${ourId}/episodes`)
    .then((response) => {
      return response.json();
    })
    .then((data) => fetchShow(data))
    .catch((error) => {
      console.log(error);
    });
});
