// ==========================================================================
// MvoDruid.TreeNode Fixtures
// ==========================================================================

require('core');

MvoDruid.FIXTURES = MvoDruid.FIXTURES.concat([

	{ guid: 'la_000001', type: 'TreeNode', label: 'Front Matter', fileguid: 'f_000001', children: ['la_000002', 'la_000003', 'la_000004', 'la_000005'] },
	{ guid: 'la_000002', type: 'TreeNode', label: 'Cover', fileguid: 'f_000001' },
	{ guid: 'la_000003', type: 'TreeNode', label: 'Title page', fileguid: 'f_000003' },
	{ guid: 'la_000004', type: 'TreeNode', label: 'Preliminaries', fileguid: 'f_000004' },
	{ guid: 'la_000005', type: 'TreeNode', label: 'Preface', fileguid: 'f_000005' },
	{ guid: 'la_000006', type: 'TreeNode', label: 'Body', fileguid: 'f_000007', children: ['la_000007', 'la_000008', 'la_000009', 'la_000010'] },
	{ guid: 'la_000007', type: 'TreeNode', label: 'Plate I', fileguid: 'f_000017' },
	{ guid: 'la_000008', type: 'TreeNode', label: 'Plate II', fileguid: 'f_000019' },
	{ guid: 'la_000009', type: 'TreeNode', label: 'Plate III', fileguid: 'f_000021' },
	{ guid: 'la_000010', type: 'TreeNode', label: 'Plate IV', fileguid: 'f_000029' },
	{ guid: 'la_000011', type: 'TreeNode', label: 'Back Matter', fileguid: 'f_000051', children: ['la_000012'] },
	{ guid: 'la_000012', type: 'TreeNode', label: 'Preservation colophon', fileguid: 'f_000051' }

/*
	{
		guid: 'VAA1194_tree',
		type: 'DocumentTree',
		documenttree: {
			title: 'The problem of pratical eugenics',
			label: [
				{ guid: 'la_000001', type: 'text', label: 'Front Matter', fileguid: 'f_000001', children: [
					{ guid: 'la_000002', type: 'text', label: 'Cover', fileguid: 'f_000001' },
					{ guid: 'la_000003', type: 'text', label: 'Title page', fileguid: 'f_000003' },
					{ guid: 'la_000004', type: 'text', label: 'Preliminaries', fileguid: 'f_000004' },
					{ guid: 'la_000005', type: 'text', label: 'Preface', fileguid: 'f_000005' }
				] },
				{ guid: 'la_000006', type: 'text', label: 'Body', fileguid: 'f_000007', children: [
					{ guid: 'la_000007', type: 'text', label: 'Plate I', fileguid: 'f_000017' },
					{ guid: 'la_000008', type: 'text', label: 'Plate II', fileguid: 'f_000019' },
					{ guid: 'la_000009', type: 'text', label: 'Plate III', fileguid: 'f_000021' },
					{ guid: 'la_000010', type: 'text', label: 'Plate IV', fileguid: 'f_000029' }
				] },
				{ guid: 'la_000011', type: 'text', label: 'Back Matter', fileguid: 'f_000051', children: [
					{ guid: 'la_000012', type: 'text', label: 'Preservation colophon', fileguid: 'f_000051' }
				] }
			]
		}
	}
*/

]);
