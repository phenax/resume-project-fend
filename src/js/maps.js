
(function(win) {

	window.initializeMap= function() {};

	win.GoogleMaps= function(center, zoom) {

		var self= {};

		self._onLoadStack= [];
		self._markers= [];
		self.loaded= false;


		self.init= function() {


			var $script= document.createElement('script');
			$script.setAttribute('async', true);
			$script.setAttribute('defer', true);
			$script.src= 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAjPs0W0u7uHmMEHhJGwZyhTVlEE_5KKso&callback=initializeMap';


			$script.onload= function() {

				self.createMap(zoom);
				self.addMarker(center);

				var func;

				setTimeout(function() {
					
					while((func= self._onLoadStack.pop())) {

						if(typeof func === 'function')
							func(self);
					}
					
					self.loaded= true;
				},0);
			};

			document.body.appendChild($script);

			return self;
		};


		self.createMap= function(zoom) {

			var $hook= document.getElementById('myMap');

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
