// ==========================================================================
// MvoDruid.ImageFile
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
MvoDruid.ImageFile = SC.Record.extend(
/** @scope MvoDruid.ImageFile.prototype */ {

	properties: [
		'type',
		'url',
		'treelabel',
		'number'
	],
	
	treelabelType: 'MvoDruid.TreeLabel'

});
