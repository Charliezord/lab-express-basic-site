const base = `https://en.wikipedia.org/w/api.php?action=parse&page=Dorothy_Vaughan&prop=text&formatversion=2&origin=*&format=json`;

// async-await
async function getDataFromWikipedia() {
  const responseFromFetch = await fetch(base);
  console.log(responseFromFetch);
  const data = await responseFromFetch.json();
  console.log("From async function");
  
  console.log(data);

  const aboutContainer = document.getElementById("about-text")
  aboutContainer.innerHTML = data.parse.text;

  console.log(aboutContainer.children[0].children)
  
}

getDataFromWikipedia();


// const introContainer = document.getElementById("intro-container")
//   introContainer.innerHTML = data.parse.text;