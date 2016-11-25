
window.$(document).ready(function() {

	var models= [
		window.bio, 
		window.education, 
		window.work, 
		window.projects
	];

	var resume= window.ResumeBuilder(models);
	resume.render();


	var $map= window.$('#myMap');
	var coordinates= [
		{ lat: 40.836852, lng: -73.832632 },
		{ lat: 40.736852, lng: -73.822632 },
		{ lat: 40.688969, lng: -73.940735 },
		{ lat: 40.936852, lng: -73.876632 }
	];

	var maps= window.GoogleMaps(coordinates[0], 10, $map.get(0));

	maps.init()
		.ready(function() {
			coordinates
				.forEach(function(coord) {
					maps.addMarker(coord);
				});
		});
});
