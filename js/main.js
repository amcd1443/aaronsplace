$(function () {

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
  };

  var placesFromContentful 

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

// Begin Infinite Scrolling

	<script>
	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".dynamicContent #loader", triggerHook: "onEnter"})
					.addTo(controller)
					.on("enter", function (e) {
						if (!$("#loader").hasClass("active")) {
							$("#loader").addClass("active");
							if (console){
								console.log("loading new items");
							}
							// simulate ajax call to add content using the function below
							setTimeout(addPlaces, 1000, 9);
						}
					});

	// pseudo function to add new content. In real life it would be done through an ajax request.
	function addPlaces (amount) {
		for (i=1; i<=amount; i++) {
			//var randomColor = '#'+('00000'+(Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
			$("<div></div>")
				//.addClass("box1")
				//.css("background-color", randomColor)
				.appendTo(".dynamicContent");
		}
		// "loading" done -> revert to normal state
		scene.update(); // make sure the scene gets the new start position
		$("#loader").removeClass("active");
	}

	// add some boxes to start with.
	addPlaces(18);
</script>


// End Inifinte Scrolling

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


