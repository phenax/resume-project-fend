
(function(win) {

	// For templating simple key value pairs
	var TEMPLATE_KEY= [ '{%', '%}' ];

	// For templating lists
	var TEMPLATE_LIST= [ '{%--', '--%}' ];

	/**
	 * A helper function to render all the templates
	 * 
	 * @param {List} models   A list of all models to render
	 */
	win.ResumeBuilder= function(models) {

		var self= {};

		/**
		 * Starts rendering all templates
		 */
		self.render= function() {

			models.forEach(function(model) {

				model.display();
			});
		};

		return self;
	};


	/**
	 * Rendering templates
	 * 
	 * @param  {[type]} content [description]
	 * @param  {[type]} key     [description]
	 */
	win.ResumeBuilder.objectTemplating= function(content, key) {

		var startStr= TEMPLATE_LIST[0] + key;
		var endStr= TEMPLATE_LIST[1];

		return function(callback) {

			var start= content.indexOf(startStr) + (startStr).length;

			// If there is no start point, exit out
			if(start === (startStr).length - 1)
				return 'ERROR: Cant render list ' + key;

			var end= 0, nextStart, nextEnd= 0;

			var substr= content.slice(start);

			// console.log('-------' + key);

			while(substr) {

				end= substr.slice(nextEnd).indexOf(endStr);

				if(end === -1)
					return '';

				nextStart= substr.slice(nextEnd).indexOf(TEMPLATE_LIST[0]);

				if(nextStart === -1)
					break;

				if(end < nextStart)
					break;

				nextEnd= end + TEMPLATE_LIST[1].length;
			}

			end= nextEnd + substr.slice(nextEnd).indexOf(endStr);

			var shortTemplate= substr.slice(0, end);
			var shortTemplateWithData= callback(shortTemplate);

			return content
					.split(startStr + shortTemplate + endStr)
					.join(shortTemplateWithData);
		};
	};

	win.ResumeBuilder.compileTemplate= function(template, data) {

		var content= template;

		for(var key in data) {

			if(typeof data[key] !== 'function') {

				var value= data[key];

				var templating= win.ResumeBuilder.objectTemplating(content, key);

				// If the value is an array
				if(value.constructor === Array) {

					content= templating(function(template) {

						return value.map(function(val) {

							return win.ResumeBuilder.compileTemplate(
								template, 
								(typeof val === 'string')? {'__value__': val}: val
							);

						}).join('');
					});

				// If the value is an object literal
				} else if(value.constructor === Object) {

					content= templating(function(template) {

						var content= '';

						for(var i in value) {
							content+= win.ResumeBuilder.compileTemplate(
								template, 
								{ '__key__': i, '__value__': value[i] }
							);
						}

						return content;
					});

				// For all other data types of value
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

		// Async
		setTimeout(function() {

			// For benchmarking
			console.time('Time to render template');
			
			var renderedStr= win.ResumeBuilder.compileTemplate(template, data);

			$parent.append(renderedStr);

			console.timeEnd('Time to render template');
		}, 0);

	};

})(window);
