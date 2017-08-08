$(function () {
  console.log("hello world");

  	var client = contentful.createClient({
  		space: '29x3cj9t96dt',
  		accessToken: 'd4f626edbc7cd7ecb2982bbd6ca969a9c186d994138f4e422b3841f5fa237678'
	})

	client.getEntries().then(function (entries) {
  		console.log("here are the entries ", entries.total + " placess");
  		console.log("here they are:", entries);
  		var places = entries.items;
  		for (i = 0; i < places.length; i++) {
  			var place = places[i];
  			var htmlToAdd = "<li>"+ place.fields.placename + "</li>";
  			$("#manhattanplaces").append(htmlToAdd);
  			console.log("HTML should have been added");
  		}

	});




});
