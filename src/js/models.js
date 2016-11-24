
(function(win, $) {

	win.bio= {

		name: 'Richard Grayson',

		role: 'Superhero(Nightwing)',

		contacts: {
			mobile: '555666777',
			email: 'richard.grayson@wayne.com',
			github: 'richard.grayson',
			twitter: '@richard.grayson',
			location: 'Gotham',
		},

		welcomeMessage: 'Hey there! Welcome to my cool resume thing.', 

		skills: [
			'Martial Arts',
			'Stealth',
			'Criminology',
			'Master of Disguise'
		],

		biopic: 'http://vignette1.wikia.nocookie.net/marvel_dc/images/c/cd/Nightwing_(Earth-16).jpg/revision/latest?cb=20130116112248',

		display: function() {

			var template= $('.js-template-header').html();
			var $header= $('.js-header');

			win.ResumeBuilder.templateRender($header, template, this);
		}
	};

	win.education= {
		schools: [
			{
				name: 'Hogwarts',
				location: 'Unknown',
				degree: 'B.M.',
				majors: [
					'Witchcraft',
					'Wizardry'
				],
				dates: '2010-2014',
				url: 'https://en.wikipedia.org/wiki/Hogwarts'
			},
			{
				name: 'Prof. Xaviers school for gifted youngsters',
				location: 'North Salem',
				degree: 'Masters',
				majors: [
					'Superpowers'
				],
				dates: '2015-2017',
				url: 'https://en.wikipedia.org/wiki/X-Mansion'
			}
		],
		onlineCourses: [
			{
				title: '10 Ways to defeat Joker',
				school: 'UnKnown',
				dates: '2015',
				url: 'https://google.com',
			}	
		],
		display: function() {
			// render here
		}
	};

	win.work= {
		jobs: [
			{
				employer: 'Batman', 
				title: 'Superhero Internship', 
				location: 'Gotham', 
				dates: 'in progress',
				description: 'string', 
			},
			{
				employer: 'Daily Planet', 
				title: 'New Reporter', 
				location: 'Metropolis', 
				dates: '2014',
				description: 'string', 
			}
		],
		display: function() {
			// render
		}
	};

	win.projects= {
		projects: [
			{
				title: 'Saved Gotham from Riddler',
				dates: 'March 2016',
				description: 'Riddler had excaped Arkham Asylum. I, under the supervision of Batman, captured him. Details are confidential.',
				images: ['https://s-media-cache-ak0.pinimg.com/236x/46/c1/54/46c15460f4fc00ff21bfce079a8e1429.jpg']
			},
		],
		display: function() {
			// render
		}
	};


})(window, window.$ || window.jQuery);

