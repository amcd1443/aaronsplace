$(function () {
	var placesFromContentful = null;

 	var client = contentful.createClient({
  		space: '29x3cj9t96dt',
  		accessToken: 'd4f626edbc7cd7ecb2982bbd6ca969a9c186d994138f4e422b3841f5fa237678'
	 });

 	var currentDistrict = null;

 	var arrayBoroughs = ["Manhattan", "Brooklyn", "east village", "flat iron gramercy", "noho"];

	var allBoroughs = function() {
		
	};
 	

	var showDistrictPlaces = function(whichBurrow) {
		currentDistrict = whichBurrow;
	    $("#placeList").empty();
	    for (i = 0; i < placesFromContentful.length; i++) {
	      var place = placesFromContentful[i];
	      var placeName = "<li>"+ place.fields.placename + " - " + place.fields.placedescription + " this is the load on scroll " + "</li>";
	      console.log(whichBurrow, "whichBurrow1");
	      console.log(place.fields.placelocation, "placeFieldsLocation1");
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
	};

var loadPageData = function() {
		client.getEntries({skip:10, limit:10}).then(function(entries) {
			var newLoadData = entries.items; 
			var combinedData = placesFromContentful.concat(newLoadData);
			console.log(combinedData, "hello");
			placesFromContentful = combinedData;	
			
			showDistrictPlaces(currentDistrict);
			
		})
	};	

	assignClickHandlers();

// Start of Infinite scrolling



$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       loadPageData();

   }
   
});



// End of Infinite scrolling

	client.getEntries({skip:0,limit:10}).then(function (entries) {
		var places = entries.items;
  		for (i = 0; i < places.length; i++) {
  			var place = places[i];
			var placeName = "<li>"+ place.fields.placename + " - " + place.fields.placedescription + " this is the first 10 " + "</li>";
  		  	$("#placeList").append(placeName);
	  	}
	    placesFromContentful = places;
	    console.log(entries,"entries")
	});
});


// 3 steps
// establish bottom
// load more information
// combine the newly loaded information to previous info