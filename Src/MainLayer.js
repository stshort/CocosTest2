// Class MainLayer - extends from Cocos2D's LayerColor class.
var MainLayer = cc.LayerColor.extend({
	
	// Constructor
	ctor: function() {
		this._super();

		// Bind to the native class - required for Cocos2D derived class
		cc.associateWithNative(this, cc.LayerColor);
	},

	// When node is added to the scene the first time, call onEnter
	onEnter: function() {
		this._super();

		// Create a sprite (s_player exists in resource.js)
		var player = cc.Sprite.create(s_player);

		// Set the player position
		player.setPosition(player.getContentSize().width / 2, winSize.height / 2);

		// Add the player sprite to the layer
		this.addChild(player);
	}
});

// Helper method to create a new instance of the MainLayer
MainLayer.create = function () {
	var sg = new MainLayer();
	if (sg && sg.init(cc.c4b(255, 255, 255, 255))) {
		return sg;
	}
	return null;
};

// Helper method to create a new scene and add the MainLayer as a child
MainLayer.scene = function () {
	var scene = cc.Scene.create();
 	var layer = MainLayer.create();
	scene.addChild(layer);
	return scene;
};