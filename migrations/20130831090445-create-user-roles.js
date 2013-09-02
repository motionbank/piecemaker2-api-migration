var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable(
		'user_roles',
		{
			id: {
				type: 'string', 
				length: 50,
				primaryKey: true
			},
			inherit_from_id: {
				type: 'string', 
				length: 50
			},
			description: {
				type: 'text', 
				notNull: false
			}
		},
		callback
	);
};

exports.down = function(db, callback) {
	db.dropTable('user_roles',callback);
};
