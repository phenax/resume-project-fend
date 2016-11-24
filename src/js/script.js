
window.$(document).ready(function() {

	var models= [
		window.bio, 
		window.education, 
		window.work, 
		window.projects
	];

	var resume= window.ResumeBuilder(models);

	resume.render();	

});
