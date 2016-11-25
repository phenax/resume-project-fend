
window.$(document).ready(function() {

	var models= [
		// window.bio, 
		// window.education, 
		// window.work, 
		window.projects
	];

	var resume= window.ResumeBuilder(models);

	// For benchmarking
	console.time('template_rendering');
	resume.render();
	console.timeEnd('template_rendering');

});
