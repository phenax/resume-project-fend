
var models= [
	window.bio, 
	window.education, 
	window.work, 
	window.projects
];

var resume= window.ResumeBuilder(models);

document.addEventListener('DOMContentLoaded', function() {
	resume.render();
});
