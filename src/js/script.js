
window.$(document).ready(function() {

	var models= [
		// window.models.bio, 
		window.models.education, 
		// window.models.work, 
		// window.models.projects
	];

	var resume= window.ResumeBuilder(models);

	resume.render();
});
