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

	workspaceCentral: undefined,
	workspaceHeader: undefined,
	workspaceLeftPane: undefined,
	workspaceRightPane: undefined,
	workspaceFooter: undefined,

	isLeftPaneEnabled: true,
	
	init: function () {},

	/**
	Sets up the views in the workspace.

	This setup cannot be done in the init() function because at the time that
	function is called the other views are themselves also being init()'ed, so
	they cannot yet be referenced.

	This function must hence be explicitly called from the main() function
	during application setup.
	*/
	initializeWorkspace: function () {
		this.workspaceCentral = SC.page.getPath('workspace.central').
			set('originalPosition',
				{ left: '210', top: '110', right: '210', bottom: '60' });
		this.workspaceHeader = SC.page.getPath('workspace.header').
			set('originalPosition',
				{ left: '0', top: '0', right: '210', bottom: '60' });
		this.workspaceLeftPane = SC.page.getPath('workspace.leftPane').
			set('originalPosition',
				{ left: '210', top: '110', right: '210', bottom: '60' });
		this.workspaceRightPane = SC.page.getPath('workspace.rightPane').
			set('originalPosition',
				{ left: '210', top: '110', right: '210', bottom: '60' });
		this.workspaceFooter = SC.page.getPath('workspace.footer').
			set('originalPosition',
				{ left: '210', top: '110', right: '210', bottom: '60' });

		this.attachChildren();
		this.showAllPanes();
	},

	attachChildren: function () {
		this.workspaceCentral.appendChild(SC.page.get('imageScrollView'));
		this.workspaceHeader.appendChild(SC.page.get('titleView'));
		this.workspaceLeftPane.appendChild(SC.page.get('thumbnailsScrollView'));
		//this.workspaceRightPane.appendChild(SC.page.get('metadataScrollView'));
		this.workspaceRightPane.appendChild(SC.page.get('treeScrollView'));
		SC.page.getPath('treeScrollView.treeView').buildTree();
		this.workspaceFooter.appendChild(SC.page.get('toolboxView'));
	},

	showAllPanes: function () {
		this.workspaceCentral.set('isVisible', YES);
		this.workspaceHeader.set('isVisible', YES);
		this.workspaceLeftPane.set('isVisible', YES);
		this.workspaceRightPane.set('isVisible', YES);
		this.workspaceFooter.set('isVisible', YES);
	},

	camelize: function (s) {
		return s ? s.charAt(0).toUpperCase() + s.substring(1) : s;
	},

	/**
	Expands one the edges of the specified pane in order to take up the space
	left by another hidden pane

	@param pane {Object}
	@param attribute {String} 'left' | 'right' | 'top' | 'bottom' | 'width' | 'height'
	@param value {String} the new value of the attribute, in CSS-like format;
	for values in pixels only the integer part should be given (excluding the 'px')
	*/
	wsExpandPanePosition: function (pane, attribute, value) {
		// attribute is valid?
		if (pane && attribute in
				['left', 'right', 'top', 'bottom', 'width', 'height']
		) {
			pane.set('style' + this.camelize(attribute), value);
		}
	},

	/**
	Sets one the edges of the specified pane to its original position

	@param pane {Object}
	@param attribute {String} 'left' | 'right' | 'top' | 'bottom' | 'width' | 'height'
	*/
	wsResetPanePosition: function (pane, attribute) {
		// attribute is valid key?
		if (pane) {
			var originalValue = pane.get('originalPosition')[attribute];
			if (originalValue) {
				pane.set('style' + this.camelize(attribute), originalValue);
			}
		}
	},

	hideLeftPane: function () {
		this.workspaceLeftPane.set('isVisible', NO);
		// expand central pane's left edge
		//this.wsExpandPanePosition(this.workspaceCentral, 'left', '0');
		this.workspaceCentral.set('styleLeft', '0');
		this.set('isLeftPaneEnabled', false);
	},

	showLeftPane: function () {
		this.workspaceLeftPane.set('isVisible', YES);
		// reset central pane's left edge
		this.wsResetPanePosition(this.workspaceCentral, 'left');
		this.set('isLeftPaneEnabled', true);
	},
	
	switchLeftPane: function () {
		if (this.get('isLeftPaneEnabled')) {
			this.hideLeftPane();
		}
		else {
			this.showLeftPane();
		}
	}

});
