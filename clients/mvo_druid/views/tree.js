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

	init: function () {
		sc_super();
		
		var html = [];

        html.push('my content');

        // Finally set the innerHTML of the view
        this.set('innerHTML', html);

		jQuery('#tree_view').html('Hello World!').css('color', 'red');
    },

	buildTree: function () {

		var tree = new YAHOO.widget.TreeView("tree_view", [ 
			{type: "text", label: "List 0", children: [
				{type: "text", label: "List 0-0", children: [
					"item 0-0-0",
					"item 0-0-1"
				]},
				{type: "text", label: "item 0-1", children: [
					{type: "text", label: "elsewhere", href: "www.elsewhere.com", target: "_new", title: "go elsewhere", children: [
						"item 0-1-0",
						"item 0-1-1"
					]}
				]}
			]}
		]);
		tree.render();
	}
});
