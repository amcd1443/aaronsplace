$(function () {
	var placesFromContentful = [];

 	var client = contentful.createClient({
  		space: '29x3cj9t96dt',
  		accessToken: 'd4f626edbc7cd7ecb2982bbd6ca969a9c186d994138f4e422b3841f5fa237678'
	 });

 	var currentDistrict = "all";

 	var pageCounter = 0;

 	var arrayBoroughs = ["Manhattan", "Brooklyn", "east village", "flat iron gramercy", "noho"];

	var showDistrictPlaces = function(whichBurrow) {
		currentDistrict = whichBurrow;
		$("#placeList").empty();
			for (i = 0; i < placesFromContentful.length; i++) {
		    	var place = placesFromContentful[i];
		    	var placeHTML = "<li>"+ place.fields.placename + " - " + place.fields.placedescription + "</li>";
		    	if (place.fields.placelocation == whichBurrow) {
					$("#placeList").append(placeHTML);
					} else if (whichBurrow == "all") {
					$("#placeList").append(placeHTML);
				};
			};			
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
	  		
			showDistrictPlaces("all");
		});
	};



	var loadPageData = function(whichPage) {
		client.getEntries({
			skip:(10 * whichPage), 
			limit:10,
			content_type: "place",
			'fields.placelocation' : currentDistrict
		}).then(function(entries) {
			var newLoadData = entries.items; 
			var combinedData = placesFromContentful.concat(newLoadData);
			placesFromContentful = combinedData;	
				
			showDistrictPlaces(currentDistrict);
				
		});
	};	

// Start of load on scrolling
// below text locates the 'bottom' of the page and displays data when scroll reaches bottom
	$(window).scroll(function() {
   		if($(window).scrollTop() + $(window).height() == $(document).height()) {
       		pageCounter += 1; 
       		loadPageData(pageCounter);
   		};
   
	});

// End of load on scrolling
	assignClickHandlers();

	loadPageData(pageCounter);



});
//make the website work more better
