/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
const BOARDWALK_TIJUANA_PANTHERS = "https://www.youtube.com/embed/ARl1MxIMy98?si=9rLpJHAAVwD7Jr7G";


//Array of all song objects
const songs = [
  {title: "Heroes And Villains", 
    band: "The Beach Boys",
    genre: "Psychedelic Pop",
    year: 1967
  },{title: "SWEET AGNES",
   band: "Masayoshi Takanaka",
   genre: "Jazz Fusion, Citypop",
   year: 1977
  },{title: "Boardwalk",
    band: "Tijuana Panthers",
    genre: "Surf Rock, Doo-Wop",
    year: 2013
  },{title: "Badfish",
    band: "Sublime",
    genre: "Reggae Rock",
    year: 1992
  },{title: "TOKYO REGGIE",
    band: "Masayoshi Takanaka",
    genre: "Jazz Fusion, Citypop",
    year: 1976
  },{title: "Forbidden Zone",
    band: "Oingo Boingo",
    genre: "Punk, Jazz-Rock",
    year: 1980
  },{title: "Skylark",
    band: "The Four Freshmen",
    genre: "Jazz",
    year: 2006
  },{title: "Caught By The Fuzz",
    band: "Supergrass",
    genre: "Punk, Rock",
    year: 1995
  },{title: "Prayer Knees",
    band: "Tijuana Panthers",
    genre: "Surf Rock, Punk",
    year: 2015
  },{title: "Joe Hill",
    band: "Joan Baez",
    genre: "Folk",
    year: 1969
  },{title: "Basket Case",
    band: "Green Day",
    genre: "Punk, Pop-Punk",
    year: 1994
  },{title: "Surfer Girl",
    band: "The Beach Boys",
    genre: "Pop, Surf Pop",
    year: 1963
  },{title: "Denmark Street",
    band: "The Kinks",
    genre: "Rock",
    year: 1970
  },{title: "MAMBO JAMBO",
    band: "Masayoshi Takanaka",
    genre: "Jazz Fusion, Cuban",
    year: 1994
  },{title: "Another Believer",
    band: "Rufus Wainwright",
    genre: "Pop, Soundtrack",
    year: 2007
  },{title: "Ball And Chain",
    band: "Sublime",
    genre: "Ska, Reggae Rock",
    year: 1992
  },{title: "Yes Sir!",
    band: "Oingo Boingo",
    genre: "Jazz, Cabaret",
    year: "1977"
  },{title: "Nature Zone",
    band: "Oingo Boingo",
    genre: "Jazz Fusion",
    year: "1980"
  }];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  for (let i = 0; i < songs.length; i++) {
    let thisSong = songs[i];
    
    if(thisSong != undefined) {
      let title = thisSong.title;
      let band = thisSong.band;
      let genre = thisSong.genre;
      let year = thisSong.year;

      // This part of the code doesn't scale very well! After you add your
      // own data, you'll need to do something totally different here.
      let imageURL = "";

      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, title, imageURL, band,year, genre); // Edit title and image
      cardContainer.appendChild(nextCard); // Add new card to the container
    }
  }
}

function editCardContent(card, newTitle, newImageURL, bandName, yearRelased, genre) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + "Cover";

  const cardList = card.querySelector("ul");
  console.log("cardList: " + cardList);

  let songDetails = [bandName, yearRelased, genre];
  for(detail of songDetails) {
    let liItem = document.createElement("li");
    liItem.textContent = detail;
    cardList.appendChild(liItem);
  }



  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//   console.log("Button Clicked!");
//   alert(
//     "Work in Progress"
//   );
// }

function sortByYear() {
  songs.sort(function(s1, s2) {
      if(s1.year < s2.year) {
        return -1;
      }
      else if(s1.year > s2.year) {
        return 1;
      }
      return 0;
  });
  showCards();
}

function filterByYear() {
  console.log("Year selected by user\n");
  const yrInput = document.getElementById("num").value;
  for(let k = songs.length-1; k >= 0; k--) {
    if(songs[k].year != yrInput) {
      delete songs[k];
    }
  }
  showCards();
  
}

function filterByGenre() {
  console.log("Genre selected by user\n");
  const input = document.getElementById("txt").value.toLowerCase();
  for(let k = songs.length-1; k >= 0; k--) {
    if(!songs[k].genre.toLowerCase().includes(input)) {
      delete songs[k];
    }
  }
  showCards();
}

function removeLastCard() {
  songs.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
