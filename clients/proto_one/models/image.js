// ==========================================================================
// ProtoOne.Image
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
ProtoOne.Image = SC.Record.extend(
/** @scope ProtoOne.Image.prototype */ {

	properties: ['type', 'url', 'caption', 'author', 'source']
	//properties: ['type', 'recid', 'file_name', 'mime_type', 'file_size', 'url', 'source_url', 'date_added', 'caption']

});
