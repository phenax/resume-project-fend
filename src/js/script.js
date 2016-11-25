
window.$(document).ready(function() {

	var resume= window.ResumeBuilder([
		window.bio, 
		window.education, 
		window.work, 
		window.projects
	]);

	// Resume builder renders all the 
	// components in their hooks
	resume.render();

	// The map element
	var $map= window.$('#myMap');

	// Coordinates to mark
	var coordinates= [
		{ lat: 40.836852, lng: -73.832632 },
		{ lat: 40.736852, lng: -73.822632 },
		{ lat: 40.688969, lng: -73.940735 },
		{ lat: 40.936852, lng: -73.876632 }
	];

	// Create a new instance of the GoogleMaps wrapper
	var maps= window.GoogleMaps(coordinates[0], 10, $map.get(0));

	// Initialize the map
	maps.init()
		.ready(function() {  // When the all stuff is loaded and ready to go
			coordinates
				.forEach(function(coord) {
					maps.addMarker(coord);
				});
		});
});
