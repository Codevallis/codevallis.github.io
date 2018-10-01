$.ajax({
	url:"https://bgg-json.azurewebsites.net/collection/chaings"
}).done(function(data){
	var game = "";
	$.each($.parseJSON(data), function(key, value){
		if(value.owned){
			
			var name = "<p>" + value.name + "</p>";
			var img = "<img src = '" + value.thumbnail + "' \>"; 
			var players = "<p>Players: " + value.minPlayers + "-" + value.maxPlayers; 
			var html ="<div class='row' style='border: 1px solid black'><div class='col-md-12'>";
			html +="<div class='row'><div class='col-md-12'>";
			html += name;
			html += "</div></div>";
			html +="<div class='row'><div class='col-md-12'>";
			html += img;
			html += "</div></div>";
			html +="<div class='row'><div class='col-md-12'>";
			html += players;
			html += "</div></div>";
			html += "</div></div>";
			$("#listOfGames").append(html);
		}
		
	});
	
});