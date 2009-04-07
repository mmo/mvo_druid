// ==========================================================================
// MvoDruid.MasterController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
MvoDruid.masterController = SC.CollectionController.create(
/** @scope MvoDruid.masterController */ {

	/**
	The selected file/object that is currently being displayed by the
	application
	@type String the guid of an object of type MvoDruid.CoreNode (TODO: not yet! for now it's of type MvoDruid.SampleImage)
	 */
	selectedObjectId: undefined,
	
	/**
	@property

	@type MvoDruid.SampleImage // TODO: should be a MvoDruid.CoreNode instead
	 */
	selectedObject: function () {
		if (this.get('selectedObjectId')) {
			return MvoDruid.SampleImage.find(this.get('selectedObjectId'));
		}
	}.property('selectedObjectId'),

	metadata: function () {
		var md = MvoDruid.Metadata.findAll();
		if (md) {
			return md[0];
		}
		else {
			return undefined;
		}
	}.property(),
	
	/**
	Changes the currently selected object
	@param {String} the guid of an object of type MvoDruid.CoreNode (TODO: not yet! for now it's of type MvoDruid.SampleImage)
	 */
	changeSelection: function (guid) {
        console.log('mastercontroller.changeSelection ' + guid);
		this.set('selectedObjectId', guid);
	},
	
	/**
	this is a dirty hack: this method repeats some of the initial work done in main.js
	in order to be able to reload the fixture data for a different example
	*/
	loadFixtures: function (fixtureData) {
        console.log('mastercontroller.loadFixtures');
		// remove current fixture records from the store
		SC.Store.destroyRecords(MvoDruid.SampleImage.findAll());
		SC.Store.destroyRecords(MvoDruid.TreeNode.findAll());
		// reload new fixtures
		MvoDruid.server.preload(fixtureData);
		// update controllers' collections
		var imageCollection = MvoDruid.SampleImage.collection();
		this.set('content', imageCollection); // TODO: should be a MvoDruid.CoreNode collection
		imageCollection.refresh();
		MvoDruid.thumbnailController.set('content', imageCollection);
		imageCollection.refresh();
		// rebuild tree widget
		SC.page.getPath('treeScrollView.treeView').buildTree();
		//MvoDruid.treeController.masterObjectSelectionDidChange();
	},

	loadFixturesExample1: function () {
		this.loadFixtures(MvoDruid.FIXTURES_indiana);
	},
	loadFixturesExample2: function () {
		this.loadFixtures(MvoDruid.FIXTURES_rerodoc);
	},
	loadFixturesExample3: function () {
		this.loadFixtures(MvoDruid.FIXTURES_berkley);
	},
	loadFixturesExample4: function () {
		this.loadFixtures(MvoDruid.FIXTURES_dfg);
	}

});
