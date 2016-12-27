'use strict';

class App {
	constructor () {
		let clocks = document.querySelectorAll('cool-clock');
		console.log(clocks);
		setInterval(_ => {
			clocks.forEach((c) => {
				c.date = new Date();
			});
			
		}, 500);	
	}
}

new App();

