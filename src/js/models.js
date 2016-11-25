
(function(win, $) {

	win.bio= {

		name: 'Richard Grayson',

		role: 'Superhero (Nightwing)',

		contacts: {
			mobile: '1234567890',
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
				school: 'Wayne Mansion Home-Schooling',
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
				employer: 'Justice League Of Arkham', 
				title: 'Assistant Team Leader', 
				location: 'Gotham', 
				dates: '2008-2009',
				description: 'The Justice League of Arkham was formed by Batman and he led the team consisting of Me, the Joker, Catwoman, the Riddler, The Ventriloquist and Scarface, and Poison Ivy.',
			},
			{
				employer: 'Teen Titans', 
				title: 'Team Leader', 
				location: 'Gotham', 
				dates: '2006-2008',
				description: 'The Teen Titans were a team of young super-heroes who were the former sidekicks to older, more experienced heroes. They first came together when I, Aqualad and Kid Flash responded to an emergency taking place in the hamlet village known as Hatton Corners.',
			},
			{
				employer: 'Batman', 
				title: 'Superhero Internship', 
				location: 'Gotham', 
				dates: '2003-2006',
				description: 'If it’s hard being a super hero, what is it like as a sidekick? The heroes get the glory, while you clean up the mess. You don’t make the decisions and you don’t give orders. So, what do you do if you’re the Boy Wonder to one of the most recognizable super heroes in the universe and you’re looking to break out on your own?', 
			},
			{
				employer: 'Flying Grayson\'s Circus', 
				title: 'Acrobat', 
				location: 'Gotham', 
				dates: '1997-2003',
				description: 'I was the youngest in a family of acrobats known as the "Flying Graysons" so I joined the family buisness. But that was until I watched the mafia boss kill my parents to extort money from the circus that employed them. Bruce Wayne, secretly the vigilante Batman, took me in as his legal ward after witnessing their deaths, and eventually as his sidekick, Robin.',
			}
		],
		display: function() {

			var template= $('.js-template-work').html();
			var $work= $('.js-work');

			win.ResumeBuilder.templateRender($work, template, this);
		}
	};

	win.projects= {
		projects: [
			{
				title: 'Became Nightwing',
				dates: 'February 2009',
				description: 'Finally after years of working under Batman, I became independent. He was being a total asshat about me being inexperienced but I made it through and became my own man.',
				images: ['http://bamsmackpow.com/files/2016/08/Nightwing.jpg']
			},
			{
				title: 'Saved Gotham from Riddler',
				dates: 'March 2008',
				description: 'Riddler had excaped Arkham Asylum. I, under the supervision of Batman, captured him. Details are confidential.',
				images: ['https://s-media-cache-ak0.pinimg.com/236x/46/c1/54/46c15460f4fc00ff21bfce079a8e1429.jpg']
			},
		],
		display: function() {
			
			var template= $('.js-template-projects').html();
			var $projects= $('.js-projects');

			win.ResumeBuilder.templateRender($projects, template, this);
		}
	};


})(window, window.$ || window.jQuery);

