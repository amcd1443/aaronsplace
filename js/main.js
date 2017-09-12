$(function () {
	var placesFromContentful = null;

 	var client = contentful.createClient({
  		space: '29x3cj9t96dt',
  		accessToken: 'd4f626edbc7cd7ecb2982bbd6ca969a9c186d994138f4e422b3841f5fa237678'
	 });

 	var currentDistrict = null;

 	var arrayBoroughs = ["Manhattan", "Brooklyn", "east village", "flat iron gramercy", "noho"];

	var allBoroughs = function() {
		
	}
 	

	var showDistrictPlaces = function(whichBurrow) {
		currentDistrict = whichBurrow;
	    $("#placeList").empty();
	    for (i = 0; i < placesFromContentful.length; i++) {
	      var place = placesFromContentful[i];
	      var placeName = "<li>"+ place.fields.placename + " - " + place.fields.placedescription + " POSTLOADSCROLLING " + "</li>";
	      console.log(whichBurrow, "whichBurrow");
	      console.log(place.fields.placelocation, "placefieldsplacelocation");
	      if (place.fields.placelocation == whichBurrow) {

	        $("#placeList").append(placeName);
	      }
	    }
	};

	var assignClickHandlers = function() {
	  $("#manhattanButton").click(function() {

	    	showDistrictPlaces("Manhattan");

	  });

	  $("#brooklynButton").click(function() {
			
			showDistrictPlaces("Brooklyn");

	  });

	  $("#eastVillageButton").click(function() {
	    
	    	showDistrictPlaces("east village");
	  });

	  $("#flatIronGramercyParkButton").click(function() {
	    showDistrictPlaces("flat iron gramercy");
	  });
	  
	  $("#nohoButton").click(function() {
	  	showDistrictPlaces("noho");
	  });

	  $("#allButton").click(function() {
	  	showDistrictPlaces("noho");
	  });
	};


allButton

	client.getEntries({skip:0,limit:10}).then(function (entries) {
		var places = entries.items;
		console.log(entries, "entries1")
  		for (i = 0; i < places.length; i++) {
  			var place = places[i];
			var placeName = "<li>"+ place.fields.placename + " - " + place.fields.placedescription + " initial loading " + "</li>";
  		  	$("#placeList").append(placeName);
	  	}
	    placesFromContentful = places;
	    console.log(placesFromContentful, "PFC1");
	});


var loadPageData = function() {
		client.getEntries({skip:10, limit:10}).then(function(entries) {
			var newLoadData = entries.items; 
			var combinedData = placesFromContentful.concat(newLoadData);
			console.log(combinedData, "combinedData");
			placesFromContentful = combinedData;	
			
			showDistrictPlaces(currentDistrict);
			
		})
	};	

	assignClickHandlers();

// Start of load on scrolling


// below text locates the 'bottom' of the page
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       loadPageData();

   }
   
});



// End of load on scrolling


});
// 3 steps
// establish bottom
// load more information
// combine the newly loaded information to previous info