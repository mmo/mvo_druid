// ==========================================================================
// MvoDruid.PaneController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
MvoDruid.paneController = SC.Object.create(
/** @scope MvoDruid.paneController */ {

	showIt: function () {
		SC.page.getPath('workspace.central').
			appendChild(SC.page.get('imageScrollView').
			set('isVisible', YES));
		SC.page.getPath('workspace.leftPane').
			appendChild(SC.page.get('thumbnailsScrollView').
			set('isVisible', YES));
		SC.page.getPath('workspace.rightPane').
			appendChild(SC.page.get('metadata').
			set('isVisible', YES));
	}

});
