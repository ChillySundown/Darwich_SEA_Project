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

//Array of all song objects
const songs = [
  {title: "Heroes And Villains", 
    band: "The Beach Boys",
    genre: "Psychedelic Pop",
    year: 1967,
    link: "https://www.youtube.com/embed/YyfU2_2G11g?si=-hwqZxk-1BG643To&amp;controls=0" 
  },{title: "Sweet Agnes",
   band: "Masayoshi Takanaka",
   genre: "Jazz Fusion, Citypop",
   year: 1977,
   link: "https://www.youtube.com/embed/2GZjA40hVnc?si=6PA8peDbIdyhoe6F&amp;controls=0"
  },{title: "Boardwalk",
    band: "Tijuana Panthers",
    genre: "Surf Rock, Doo-Wop",
    year: 2013,
    link: "https://www.youtube.com/embed/ARl1MxIMy98?si=hsiCmzzZ5ioVUMaV&amp;controls=0"
  },{title: "Badfish",
    band: "Sublime",
    genre: "Reggae Rock",
    year: 1992,
    link: "https://www.youtube.com/embed/Qo1dLUGYTe0?si=uq2ZltYg5DuCdfv_&amp;controls=0"
  },{title: "Tokyo Reggie",
    band: "Masayoshi Takanaka",
    genre: "Jazz Fusion, Citypop",
    year: 1976,
    link: "https://www.youtube.com/embed/CnKd3V-VpDs?si=Wurt_Cj7fPqoytOC&amp;controls=0"
  },{title: "Forbidden Zone",
    band: "Oingo Boingo",
    genre: "Punk, Jazz-Rock",
    year: 1980,
    link: "https://www.youtube.com/embed/xitlReEpcrY?si=tx9zQaBWCAAtlGCM&amp;controls=0"
  },{title: "Skylark",
    band: "The Four Freshmen",
    genre: "Jazz",
    year: 2006,
    link: "https://www.youtube.com/embed/dlrrToQAgD8?si=nxVfL6dmojdUQIGX&amp;controls=0"
  },{title: "Caught By The Fuzz",
    band: "Supergrass",
    genre: "Punk, Rock",
    year: 1995,
    link: "https://www.youtube.com/embed/Y-bklantQw8?si=Qibf4YYtZNynYEqp&amp;controls=0"
  },{title: "Prayer Knees",
    band: "Tijuana Panthers",
    genre: "Surf Rock, Punk",
    year: 2015,
    link: "https://www.youtube.com/embed/G5WoUma-NyE?si=cAKlvn_2rRFf0tOw&amp;controls=0"
  },{title: "Joe Hill",
    band: "Joan Baez",
    genre: "Folk",
    year: 1969,
    link: "https://www.youtube.com/embed/kgrkFOInY8k?si=-mOrMvnINmgsoic8&amp;controls=0"
  },{title: "Basket Case",
    band: "Green Day",
    genre: "Punk, Pop-Punk",
    year: 1994,
    link: "https://www.youtube.com/embed/VKjEdYrx9P0?si=ZSq2QX5BYsX6m7zK&amp;controls=0"
  },{title: "Surfer Girl",
    band: "The Beach Boys",
    genre: "Pop, Doo-Wop",
    year: 1963,
    link: "https://www.youtube.com/embed/lHNcMs8W660?si=J7jstxY4wE5NNceQ&amp;controls=0"
  },{title: "Denmark Street",
    band: "The Kinks",
    genre: "Rock",
    year: 1970,
    link: "https://www.youtube.com/embed/d-gjVt6k16s?si=BaWmwa2AU5D2j7Vo&amp;controls=0"
  },{title: "Mambo Jambo",
    band: "Masayoshi Takanaka",
    genre: "Jazz Fusion, Cuban",
    year: 1994,
    link: "https://www.youtube.com/embed/qhU2OzwY0F0?si=XQJRQdyT6w7A-Lj_&amp;controls=0"
  },{title: "Another Believer",
    band: "Rufus Wainwright",
    genre: "Pop, Soundtrack",
    year: 2007,
    link: "https://www.youtube.com/embed/a1xaTkFG2oY?si=R8lMMSTyHJcOPRiO&amp;controls=0"
  },{title: "Ball And Chain",
    band: "Sublime",
    genre: "Ska, Reggae Rock",
    year: 1992,
    link: "https://www.youtube.com/embed/f35OeA48pR4?si=fMothPOkHhIuITbt&amp;controls=0"
  },{title: "Yes Sir!",
    band: "Oingo Boingo",
    genre: "Jazz, Cabaret",
    year: 1977,
    link: "https://www.youtube.com/embed/6eYcfAJCUkg?si=rO0IUTDRqOWamv9M&amp;controls=0"
  },{title: "Nature Zone",
    band: "Oingo Boingo",
    genre: "Jazz Fusion",
    year: 1980,
    link: "https://www.youtube.com/embed/LmNaPQilVfE?si=WXQggjbeOSBYxFDH&amp;controls=0"
  },{title: "Some of These Days",
      band: "Cab Calloway",
      genre: "Jazz, Big Band",
      year: 1930,
      link:"https://www.youtube.com/embed/giiqCYF_ops?si=crsUItAShuH9tyZB&amp;controls=0"
  },{title: "Pulling Teeth",
    band: "Green Day",
    genre: "Pop-Punk, Punk",
    year: 1994,
    link:"https://www.youtube.com/embed/8dFJBvZRlpY?si=l25aP91R12z-3upt&amp;controls=0"
  }, {title: "I Miss You",
    band: "Blink-182",
    genre: "Pop-Punk, Alternative",
    year: 2004,
    link: "https://www.youtube.com/embed/bEiexyUqZLA?si=qxGfj7w5ZZQNAZrA&amp;controls=0"
  }, {title: "Rose Marie",
    band: "Slim Whitman",
    genre: "Country, Folk",
    year: 1988,
    link: "https://www.youtube.com/embed/9KxeMJThj9A?si=hGHyqDi9yOH3gLZ9&amp;controls=0"
  }, {title: "La javanaise",
    band: "Serge Gainsbourg",
    genre: "French Pop",
    year: 1962,
    link: "https://www.youtube.com/embed/4NUhvhQAspQ?si=XBORJHi7XyxlWI_X&amp;controls=0"
  }, {title: "I Just Wasn't Made For These Times",
    band: "The Beach Boys",
    genre: "Pop",
    year: 1966,
    link: "https://www.youtube.com/embed/216YJKbber8?si=gLkynK3YP0Xl5tgx&amp;controls=0"
  }, {title: "Kids",
    band: "MGMT",
    genre: "Electronic, Pop",
    year: 2007,
    link: "https://www.youtube.com/embed/VHb_XIql_gU?si=7D6_a1kC8op_BzAM&amp;controls=0"
  }, {title: "&",
    band: "TallyHall",
    genre: "Pop-Rock, Pop, Alternative",
    year: 2011,
    link: "https://www.youtube.com/embed/pLJ85XExZtQ?si=8m0wWzwaoLSkFrPG&amp;controls=0"
  }, {title: "Banana Man",
    band: "TallyHall",
    genre: "Pop-Rock, Pop, Alternative",
    year: 2005,
    link: "https://www.youtube.com/embed/BRD9BqjIk-E?si=UgfS5BURKwROydXn&amp;controls=0"
  }, {title: "American Car",
    band: "Sam \"Sluggo\" Phipps, Oingo Boingo",
    genre: "Rock",
    year: 1987,
    link: "https://www.youtube.com/embed/d_RdsmBY0C8?si=BL38_28GjfTDzlRo&amp;controls=0&amp;start=30"
  }, {title: "Tough As Nails",
    band: "Danny Elfman",
    genre: "New Wave",
    year: 1984,
    link: "https://www.youtube.com/embed/SmihzPqEXss?si=Rioi0tcu_yR-fORY&amp;controls=0"
  },{title: "Red Headed Girl",
    band: "Tijuana Panthers",
    genre: "Surf Rock",
    year: 2015,
    link: "https://www.youtube.com/embed/bsSHYcSX8AA?si=yYDg0uVLrIHQG_-O&amp;controls=0"
  }, {title: "Strange Magic",
    band: "Electric Light Orchestra",
    genre: "Pop, Progressive Rock",
    year: 1975,
    link: "https://www.youtube.com/embed/-Wtj59opWKg?si=8-j5bZXuRomgYU3_&amp;controls=0"
  }, {title: "It's Easy To Remember",
    band: "John Coltrane",
    genre: "Jazz",
    year: 1963,
    link: "https://www.youtube.com/embed/T8m6gY2OpTE?si=jHVS2zBzKhPYFD8s&amp;controls=0"
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

      let videoURL = thisSong.link;

      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, title, videoURL, band,year, genre); // Edit title and image
      cardContainer.appendChild(nextCard); // Add new card to the container
    }
  }
}

function editCardContent(card, newTitle, videoURL, bandName, yearRelased, genre) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardVideo = card.querySelector("iframe");
  console.log("cardVideo:" + cardVideo + "\n");
  cardVideo.src = videoURL;
  cardVideo.title = newTitle + "Video";

  const cardList = card.querySelector("ul");

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
    if(songs[k] != undefined && !songs[k].genre.toLowerCase().includes(input)) {
      delete songs[k];
    }
  }
  showCards();
}

function showSelectedCards(listOfCards) {
  console.log("show cards overload called");
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  console.log("List of cards:" + listOfCards);
  for(let i = 0; i < listOfCards.length; i++) {
    const card = listOfCards[i];
    console.log("current card:" + card);
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, card.title, card.link, card.band, card.year, card.genre); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function search() {
  console.log("Search query loading\n");
  const input = document.getElementById("search").value.toLowerCase();
  const songFits = [];
  for(s of songs) {
    let currentTitle = s.title.toLowerCase();
    if(currentTitle.includes(input)) {
      songFits.push(s);
    }
  }
  showSelectedCards(songFits);
}
