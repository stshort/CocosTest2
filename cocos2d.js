// Note this is an anonymous function that autoruns - closure!
(function () {
	var d = document;
	var c= {

		// Various Cocos2D settings
		menuType:'canvas',
		COCOS2D_DEBUG:2,
		box2d:false,
		chipmunk:false,
		showFPS:true,
		frameRate:60,
		loadExtension:true,
		tag:'gameCanvas',

		// Where the Cocos2D framework code resides
		SingleEngineFile:'./Platform/HTML5/cocos2d-js-v3.11-lite.js',
		appFiles:[
			'./Src/resource.js',
			'./Src/MainLayer.js',
			'./Src/main.js'
		]
	};

	// Boilerplate code that gets things going
	window.addEventListener('DOMContentLoaded', function() {
		var s = d.createElement('script');

		if (c.SingleEngineFile && !c.engineDir) {
			s.src = c.SingleEngineFile;
		}
		else if (c.engineDir && !c.SingleEngineFile) {
			s.src = c.engineDir;
		}
		else {
			alert('You must specify either the single engine file OR the engine directory in cocos2d.js');
		}
		
		document.ccConfig = c;
		s.id = 'cocos2d-html5';
		d.body.appendChild(s);
	});
})();