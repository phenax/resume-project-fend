
(function(win) {

	var TEMPLATE_KEY= [ '{%', '%}' ];
	var TEMPLATE_LIST= [ '{--', '--}' ];

	win.ResumeBuilder= function(models) {

		var self= {};

		self.render= function() {

			models.forEach(function(model) {

				model.display();
			});
		};

		return self;
	};

	var objectTemplating= function(content, key) {

		return function(callback) {

			var startStr= TEMPLATE_LIST[0] + key;
			var endStr= TEMPLATE_LIST[1];

			var start= content.indexOf(startStr) + (startStr).length;
			var end= start + content.substring(start).indexOf(endStr);

			var shortTemplate= content.slice(start, end);

			content=
				content
					.split(startStr + shortTemplate + endStr)
					.join(callback(shortTemplate));
		};
	};

	win.ResumeBuilder.compileTemplate= function(template, data) {

		var content= template;

		for(var key in data) {

			if(typeof data[key] !== 'function') {

				var value= data[key];

				var templating= objectTemplating(content, key);

				// If the value of the model is an array
				if(value.map) {

					templating(function(template) {

						return value.map(function(val) {

							return win.ResumeBuilder.compileTemplate(
								template, 
								(typeof val === 'string')? {value: val}: val
							);

						}).join('');
					});

				} else if(typeof value === 'object' && value.constructor === Object) {

					templating(function(template) {

						var content= '';

						for(var i in value) {
							content+= win.ResumeBuilder.compileTemplate(
								template, 
								{ key: i, value: value[i] }
							);
						}

						return content;
					});

				} else {

					content= 
						content
							.split(TEMPLATE_KEY[0] + key + TEMPLATE_KEY[1])
							.join(value);
				}
			}
		}

		return content;
	};

	win.ResumeBuilder.templateRender= function($parent, template, data) {

		var renderedStr= win.ResumeBuilder.compileTemplate(template, data);

		$parent.append(renderedStr);
	};

})(window);
