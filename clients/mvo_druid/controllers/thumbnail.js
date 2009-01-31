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
	Indicates the currently (single) selected thumbnail.
	If the current selection contains more than one thumbnail,
	the first one is indicated.
	*/
	selectedThumbnail: function () {
		if (this.get('selection')) {
			return this.get('selection').objectAt(0);
		}
		else {
			return null;
		}
	}.property('selection')

}) ;
