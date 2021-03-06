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
    
    //needed ?
	/*init: function () {
		sc_super();

		// fetch TreeNode records from the store
		var treeNodeRecords = MvoDruid.TreeNode.findAll();

		for (var idx = 0; idx < treeNodeRecords.length; idx++) {
			this.fileToTreeLabel[treeNodeRecords[idx].fileguid] = treeNodeRecords[idx].guid;
		}
	},*/
	
	/**
	 */
	treeSelectionDidChange: function () {
		// update the master object selection if needed
		var selectedTreeNode = this.get('treeSelection');
        if (selectedTreeNode !== MvoDruid.masterController.get('selectedObjectId')) {
			// NOTE: the above condition is used to avoid an infinite loop of
			// change notifications between the two controllers (this and master's)
            MvoDruid.masterController.changeSelection(selectedTreeNode);
		}
	}.observes('treeSelection'),
	
	
	/**
	Observes changes in masters' object selection
	@param {String} guid the guid of an object of type MvoDruid.CoreNode
	 */
	masterObjectSelectionDidChange: function () {
		// TODO: update selected tree node in the widget
		var masterSelection = MvoDruid.masterController.get('selectedObjectId');
		console.log(
			'MvoDruid.treeController.masterObjectSelectionDidChange: ' + masterSelection);
        if (masterSelection && this.treeSelection !== masterSelection) {
			this.set('treeSelection', masterSelection);
		}
	}.observes('MvoDruid.masterController.selectedObjectId')

});
