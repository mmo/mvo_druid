// ==========================================================================
// MvoDruid.ThumbnailController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
MvoDruid.thumbnailController = SC.CollectionController.create(
/** @scope MvoDruid.thumbnailController */ {

	// controller options
	allowsEmptySelection: false,
	allowsMultipleSelection: false,

	/**
	@property

	Given that SC.CollectionController supports multiple selection, this
	function indicates a single object (the first one) in the current
	selection, even if multiple objects are currently selected
	@returns the currently (single) selected thumbnail
	@type {MvoDruid.SampleImage}
	*/
	selectedThumbnail: function () {
		if (this.get('selection')) {
			return this.get('selection').objectAt(0);
		}
		else {
			return null;
		}
	}.property('selection'),

	/**
	Changes the currently selected thumbnail, given the image record's guid
	@param {String} imageGuid the guid of an object of type {@link MvoDruid.CoreNode}
	 */
	changeSelection: function (imageGuid) {
		var imageObject = MvoDruid.SampleImage.find(imageGuid);
		if (imageObject) {
			// note: selection is set as an array with a single element
			this.set('selection', [imageObject]);
		}
	},

	/**
	 */
	thumbnailSelectionDidChange: function () {
		// update the master object selection if needed
		var selectedThumbnail = this.get('selectedThumbnail');
        //alert('selectedThumbnail '+selectedThumbnail);
		if (selectedThumbnail &&
			selectedThumbnail.guid !== MvoDruid.masterController.get('selectedObjectId')) {
			// NOTE: the above condition is used to avoid an infinite loop of
			// change notifications between the two controllers (this and master's)
            console.log('MvoDruid.thumbnailController.change(masterController) '+selectedThumbnail.guid);
			MvoDruid.masterController.changeSelection(selectedThumbnail.guid);
		}
	}.observes('selection'),

	/**
	Observes changes in masters' object selection
	@param {String} guid the guid of an object of type MvoDruid.CoreNode
	 */
	masterObjectSelectionDidChange: function () {
		// update thumbnail selection accordingly
		// NOTE: we're assuming here that the guid of the master controller's
		// selected object is the same as the corresponding thumbnail's guid;
		// that may not be the case (a translation guid->guid may be needed)
		this.changeSelection(MvoDruid.masterController.get('selectedObjectId'));
	}.observes('MvoDruid.masterController.selectedObjectId')

});
