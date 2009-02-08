// ==========================================================================
// MvoDruid.TreeController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
MvoDruid.treeController = SC.Object.create(
/** @scope MvoDruid.treeController */ {

	// guid of the currently selected tree node
	treeSelection: undefined,

	init: function () {
		sc_super();

		// fetch TreeNode records from the store
		var treeNodeRecords = MvoDruid.TreeNode.findAll();

		for (var idx = 0; idx < treeNodeRecords.length; idx++) {
			this.fileToTreeLabel[treeNodeRecords[idx].fileguid] = treeNodeRecords[idx].guid;
		}
	},
	
	treeSelectionDidChange: function () {
		// the selected tree node is synchronized with the selected file
		// TODO: find a better way of handling the guid's here
		MvoDruid.thumbnailController.changeSelection(MvoDruid.TreeNode.find(this.get('treeSelection')).get('fileguid'));
		//alert('treeSelectionDidChange: ' + this.get('treeSelection') + ' => ' + MvoDruid.TreeNode.find(this.get('treeSelection')).get('fileguid'));
	}.observes('treeSelection'),

	fileSelectionDidChange: function () {
		// TODO
		// IMPORTANT: an infinite notification loop must be avoided between file and tree node selection
		//alert('fileSelectionDidChange: ' + MvoDruid.thumbnailController.selection().get('guid'));
	}.observes('MvoDruid.thumbnailController.selection')

});
