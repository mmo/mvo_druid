// ==========================================================================
// ProtoOne.ImageController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
ProtoOne.imageController = SC.CollectionController.create(
/** @scope ProtoOne.imageController */ {

	// controller options
	allowsEmptySelection: false,
	allowsMultipleSelection: false,

	/**
	Indicates the currently (single) selected image.
	If the current selection contains more than one image,
	the first one is indicated.
	*/
	selectedImage: function () {
		if (this.get('selection')) {
			return this.get('selection').objectAt(0);
		}
		else {
			return null;
		}
	}.property('selection')

});
