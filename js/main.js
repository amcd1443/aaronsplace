$(function () {
  console.log("hello world");

  var client = contentful.createClient({
  		space: '29x3cj9t96dt',
  		accessToken: 'd4f626edbc7cd7ecb2982bbd6ca969a9c186d994138f4e422b3841f5fa237678'
	 })


  var showDistrictPlaces = function(whichBurrow) {
    $("#placeList").empty();
    for (i = 0; i < placesFromContentful.length; i++) {
      var place = placesFromContentful[i];
      var placeName = "<li>"+ place.fields.placename + " - " + place.fields.placedescription + "</li>";
      if (place.fields.placelocation == whichBurrow) {
        $("#placeList").append(placeName);  
      }
    }
    console.log(whichBurrow + " button was clicked");
  };

  var placesFromContentful 

  $("#manhattanButton").click(function() {
    showDistrictPlaces("Manhattan");
  });

  $("#brooklynButton").click(function() {
    showDistrictPlaces("Brooklyn");
  });

  $("#eastVillageButton").click(function() {
    showDistrictPlaces("East Village");
  });

  $("#flatIronGramercyParkButton").click(function() {
    showDistrictPlaces("flat iron gramercy");
  })



	client.getEntries().then(function (entries) {
  		var places = entries.items;
  		for (i = 0; i < places.length; i++) {
  		  var place = places[i];
  		  var placeName = "<li>"+ place.fields.placename + " - " + place.fields.placedescription + "</li>";
  		  $("#placeList").append(placeName);
		  }
    placesFromContentful = places;
	});





});


// finish website 
// then do new html5 boiler plate, and start a new website, git repo, and then start again. 

