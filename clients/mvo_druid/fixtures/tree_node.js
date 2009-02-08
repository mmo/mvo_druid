// ==========================================================================
// MvoDruid.TreeNode Fixtures
// ==========================================================================

require('core');

MvoDruid.FIXTURES = MvoDruid.FIXTURES.concat([

	{ guid: 'la_1', type: 'TreeNode', label: 'Front Matter', fileguid: 'f_1', children: ['la_2', 'la_3', 'la_4', 'la_5'] },
	{ guid: 'la_2', type: 'TreeNode', label: 'Cover', fileguid: 'f_1' },
	{ guid: 'la_3', type: 'TreeNode', label: 'Title page', fileguid: 'f_3' },
	{ guid: 'la_4', type: 'TreeNode', label: 'Preliminaries', fileguid: 'f_4' },
	{ guid: 'la_5', type: 'TreeNode', label: 'Preface', fileguid: 'f_5' },
	{ guid: 'la_6', type: 'TreeNode', label: 'Body', fileguid: 'f_7', children: ['la_7', 'la_8', 'la_9', 'la_10'] },
	{ guid: 'la_7', type: 'TreeNode', label: 'Plate I', fileguid: 'f_17' },
	{ guid: 'la_8', type: 'TreeNode', label: 'Plate II', fileguid: 'f_19' },
	{ guid: 'la_9', type: 'TreeNode', label: 'Plate III', fileguid: 'f_21' },
	{ guid: 'la_10', type: 'TreeNode', label: 'Plate IV', fileguid: 'f_29' },
	{ guid: 'la_11', type: 'TreeNode', label: 'Back Matter', fileguid: 'f_51', children: ['la_12'] },
	{ guid: 'la_12', type: 'TreeNode', label: 'Preservation colophon', fileguid: 'f_51' }

/*
	{
		guid: 'VAA1194_tree',
		type: 'DocumentTree',
		documenttree: {
			title: 'The problem of pratical eugenics',
			label: [
				{ guid: 'la_1', type: 'text', label: 'Front Matter', fileguid: 'f_1', children: [
					{ guid: 'la_2', type: 'text', label: 'Cover', fileguid: 'f_1' },
					{ guid: 'la_3', type: 'text', label: 'Title page', fileguid: 'f_3' },
					{ guid: 'la_4', type: 'text', label: 'Preliminaries', fileguid: 'f_4' },
					{ guid: 'la_5', type: 'text', label: 'Preface', fileguid: 'f_5' }
				] },
				{ guid: 'la_6', type: 'text', label: 'Body', fileguid: 'f_7', children: [
					{ guid: 'la_7', type: 'text', label: 'Plate I', fileguid: 'f_17' },
					{ guid: 'la_8', type: 'text', label: 'Plate II', fileguid: 'f_19' },
					{ guid: 'la_9', type: 'text', label: 'Plate III', fileguid: 'f_21' },
					{ guid: 'la_10', type: 'text', label: 'Plate IV', fileguid: 'f_29' }
				] },
				{ guid: 'la_11', type: 'text', label: 'Back Matter', fileguid: 'f_51', children: [
					{ guid: 'la_12', type: 'text', label: 'Preservation colophon', fileguid: 'f_51' }
				] }
			]
		}
	}
*/

]);
