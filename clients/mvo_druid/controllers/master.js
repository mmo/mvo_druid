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

	/**
	Changes the currently selected object
	@param {String} the guid of an object of type MvoDruid.CoreNode (TODO: not yet! for now it's of type MvoDruid.SampleImage)
	 */
	changeSelection: function (guid) {
        console.log('mastercontroller.changeSelection '+guid);
		this.set('selectedObjectId', guid);
	}

});
