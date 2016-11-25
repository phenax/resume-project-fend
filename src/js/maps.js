
(function(win) {

	/**
	 * Google maps api wrapper
	 * 
	 * @param {Object} center  The coordinates of the center
	 * @param {Number} zoom    The amount of zoom for the first render
	 */
	win.GoogleMaps= function(center, zoom, $hook) {

		var self= {};

		self._onLoadStack= [];
		self._markers= [];
		self.loaded= false;


		/**
		 * Initialize the google maps script, create map and mark center
		 */
		self.init= function() {

			// Create a script
			var $script= document.createElement('script');
			$script.setAttribute('async', true);
			$script.setAttribute('defer', true);
			$script.src= 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAjPs0W0u7uHmMEHhJGwZyhTVlEE_5KKso';

			// Onload callback
			$script.onload= function() {

				var func;

				// Create map
				self.createMap();

				// mark center
				// self.addMarker(center);

				setTimeout(function() {
					
					// Pop all the load stack elems and execute them
					while((func= self._onLoadStack.pop())) {

						if(typeof func === 'function')
							func(self);
					}
					
					// Script is loaded!
					self.loaded= true;
				},0);
			};

			// Append the script to the dom
			document.body.appendChild($script);

			return self;
		};


		/**
		 * Create a new map
		 */
		self.createMap= function() {

			self._map= new window.google.maps.Map($hook, {
				zoom: zoom,
				center: center
			});

			return self;
		};


		self.addMarker= function(position) {
			
			self._markers.push(
				new window.google.maps.Marker({
					position: position,
					map: self._map
				})
			);

			return self;
		};

		self.ready= function(callback) {

			if(self.loaded) {
				callback(self);
				return;
			}

			self._onLoadStack.push(callback);

			return self;
		};

		return self;
	};

})(window);
