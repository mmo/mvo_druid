// ==========================================================================
// MvoDruid.SampleImage
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
MvoDruid.SampleImage = SC.Record.extend(
/** @scope MvoDruid.SampleImage.prototype */ {

	properties: [
		'type',
		'image_url',
		'url',
		'title',
		'caption',
		'author',
		'source_url',
		'license',
		'license_url'
	]

});
