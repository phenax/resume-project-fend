
window.ResumeBuilder= function(models) {

	var self= {};

	self.render= function() {

		models.forEach(function(model, i) {
			model.display();
		});
	};

	return self;
};
