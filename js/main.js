$(function () {
  console.log("hello world");

  	var client = contentful.createClient({
  		space: '29x3cj9t96dt',
  		accessToken: 'd4f626edbc7cd7ecb2982bbd6ca969a9c186d994138f4e422b3841f5fa237678'
	})

	client.getEntries().then(function (entries) {
  		var places = entries.items;
  		for (i = 0; i < places.length; i++) {
  			var place = places[i];
  			var placeName = "<li>"+ place.fields.placename + place.fields.placedescription + "</li>";
  			$("#manhattanplaces").append(placeName);
  			console.log("HTML should have been added");
  		}

	});




});


// homework: continue making website
// make it filter for place.fields.placelocation

