
window.$(document).ready(function() {

	var models= [
		window.bio, 
		window.education, 
		window.work, 
		window.projects
	];

	var resume= window.ResumeBuilder(models);

	resume.render();


	var maps= window.GoogleMaps({lat: 40.836852, lng: -73.832632}, 10);

	maps
		.init()
		.ready(function() {			
			maps.addMarker({lat: 40.736852, lng: -73.822632})
				.addMarker({lat: 40.688969, lng: -73.940735})
				.addMarker({lat: 40.936852, lng: -73.876632});
		});
});
