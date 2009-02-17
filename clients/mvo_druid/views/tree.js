// ==========================================================================
// MvoDruid.TreeView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
MvoDruid.TreeView = SC.View.extend(SC.Control,
/** @scope MvoDruid.TreeView.prototype */ {

    emptyElement: '<div></div>',

	// auxiliary array that controls if a node has already been added to the tree
	// during tree construction 
	handledNodes: [],

	// dictionary: file guid => tree node
	fileToTreeNode: [],
    

	/*
	* Initialize the view object
	*/
	init: function () {
		sc_super();
		
		var html = [];

		//html.push('my content');

        // Finally set the innerHTML of the view
		//this.set('innerHTML', html);

		//jQuery('#tree_view').html('Hello World!').css('color', 'red');
    },

	/**
	Render the tree widget
	*/
	buildTree: function () {

		// Tree widget implemented with YUI TreeView
		// See http://developer.yahoo.com/yui/treeview/
		// Every TreeNode is an object with a type: 'text' and a label:
        var treeWidget = new YAHOO.widget.TreeView('tree_view');

		// fetch TreeNode records from the store and add them to the tree widget
		var treeNodeRecords = MvoDruid.TreeNode.findAll();
		for (var idx = 0; idx < treeNodeRecords.length; idx++) {
			var currentNodeGuid = treeNodeRecords[idx].guid;
			// (skip already handled nodes)
			if (!this.handledNodes[currentNodeGuid]) {
				this.addNode(currentNodeGuid, treeWidget.getRoot());
			}
		}

		// subscribe to the labelClick event on every tree node
		treeWidget.subscribe('labelClick', function (node) {
			// when a tree node is selected, update the selection in the controller
            MvoDruid.treeController.set('treeSelection', node.data.fileguid);
		});

		treeWidget.render();
	},
	
	/*
	* Adds a node to the tree widget
	@param {String} nodeGuid the guid of a {@link MvoDruid.TreeNode} object
	@param {YAHOO.widget.TextNode} parentWidgetNode
	*/
	addNode: function (nodeGuid, parentWidgetNode) {
		// fetch the TreeNode record from the store
		var treeNode = MvoDruid.TreeNode.find(nodeGuid);

		// add node to the tree
		var currentWidgetNode = new YAHOO.widget.TextNode(
			{
				label: treeNode.get('label'),
				guid: treeNode.get('guid'),
				fileguid: treeNode.get('fileguid'),
				expanded: true
			},
			parentWidgetNode);

		// mark node as added
		this.handledNodes[nodeGuid] = true;
		// update dictionary: guid => tree node
		this.fileToTreeNode[treeNode.get('guid')] = currentWidgetNode;

		// add children
		var nodeChildren = treeNode.get('children');
		if (nodeChildren) {
			for (var idx = 0; idx < nodeChildren.length; idx++) {
				this.addNode(nodeChildren[idx], currentWidgetNode);
			}
		}
	},

	// update selected node in the tree widget
	selectNode: function () {
		// TODO
        var guidOfNode = MvoDruid.SampleImage.find(MvoDruid.treeController.get('treeSelection')).get('treelabel');
		// (use fileToTreeNode dictionary to know which YAHOO.widget.TextNode to touch...)
        var nodeToFocus = this.fileToTreeNode[guidOfNode];
        nodeToFocus.focus();
	}.observes('MvoDruid.treeController.treeSelection')

});
