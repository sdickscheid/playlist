$(document).ready(function(){

  $.get('https://lit-fortress-6467.herokuapp.com/object', function(response){

    var coverArtHolder = [];

    for(var i=0; i<response.results.length; i++){
      let coverArt = response.results[i].cover_art;
      coverArtHolder.push(coverArt);
      var albumValue = coverArtHolder[Math.floor(Math.random() * response.results.length)];

  } // end loop
    console.log('ALBUMVALUE', albumValue);

    var imgDivs1 = document.getElementById("right-inner-top");
    let image1 = document.createElement("img");
      image1.src = "./images/" + albumValue;
      image1.setAttribute("width", "100%");
      image1.setAttribute("height", "100%");
    $(imgDivs1).append(image1);

    var imgDivs2 = document.getElementById("right-inner-middle");
    let image2 = document.createElement("img");
      image2.src = "./images/" + albumValue;
      image2.setAttribute("width", "100%");
      image2.setAttribute("height", "275px");
    $(imgDivs2).append(image2);

    var imgDivs3 = document.getElementById("right-inner-bottom");
    let image3 = document.createElement("img");
      image3.src = "./images/" + albumValue;
      image3.setAttribute("width", "100%");
      image3.setAttribute("height", "275px");
    $(imgDivs3).append(image3);

  }); // end API call (response)

}); // end document.ready function


// The below function will return a random album from the array of objects called "results"
// function getRandomAlbums(array){
  // var albums = "";
  // var albumHolder = [];
//
//   for(var i=0; i<array.length; i++){
//     albums = array[i].cover_art;
//     albumHolder.push(albums);
//     var albumValue = albumHolder[Math.floor(Math.random() * array.length)];
//   }
//   return albumValue;
// }
// getRandomAlbums(results);
