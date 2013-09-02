var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.addColumn(
		'events',
		'type',
		{
			type: 'string',
			length: 50,
			notNull: true
		},
		callback
	);
};

exports.down = function(db, callback) {
	db.removeColumn( 'events', 'type', callback );
};
