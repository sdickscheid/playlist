$(document).ready(function(){

    $.get('https://lit-fortress-6467.herokuapp.com/object', function(response){
      let apiCall = response.url;

      // console.log('RESPONSE', response);
      // console.log('RESULTS', response.results);
      // console.log('IDs', response.results[0].id);
      // console.log('ART', response.results[0].cover_art);

      // START LOOP
      let coverArtHolder = [];

      for(let i=0; i<response.results.length; i++){
        let coverArt = response.results[i].cover_art;
        coverArtHolder.push(coverArt);
        var albumValue = coverArtHolder[Math.floor(Math.random() * response.results.length)];
        // console.log('COVER ART', coverArt);

        // console.log('IDs', response.results[i].id); // returns all IDs
        // console.log('ART', response.results[i].cover_art); returns all art
        // console.log('ALBUM-VALUE', albumValue);

        let gallery = document.getElementById('album-gallery-art');
        // needs to be refactored to create div and apply style to divs instead of image
        let image = document.createElement('img');
          image.src = "./images/" + albumValue;
          image.style.border = "1px solid black";
          image.style.margin = "3px 50px 3px 0px";
          image.style.display = "inline-block";
          image.style.height = "90%";
          image.style.width = "8%";
          image.setAttribute("class", response.results[i].id)
        $(gallery).append(image);

      } // END LOOP
        // console.log('COVER ART', coverArtHolder)
        // console.log('IDs', response.results[i].id); // returns value > 1st array only
        // console.log('ART', response.results[i].cover_art); //returns value > 1st array only

        let galleryImage = document.getElementById('album-gallery-art');
        galleryImage.addEventListener("click", function(){

          for(let j=0; j<response.results.length; j++){
            let artist = response.results[j].artist;
            let title = response.results[j].title;
            console.log('ARTIST', artist);
            console.log('TITLE', title);
          }
        });

        let clearTracks = document.getElementById('btn-clear-tracks');
        clearTracks.addEventListener("click", function(){
          document.getElementById("album-details").value = "";
        });

        let submitBin = document.getElementById('btn-submit-bin');
        submitBin.addEventListener("click", function(){

        });


    }); // end API call (response)

}); // end document.ready function
