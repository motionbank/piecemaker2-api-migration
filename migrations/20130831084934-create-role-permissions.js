var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable(
		'role_permissions',
		{
			user_role_id: {
				type: 'string', 
				length: 50, 
				notNull: true
			},
			permission: {
				type: 'string', 
				length: 50, 
				notNull: true
			},
			entity: {
				type: 'string', 
				length: 50, 
				notNull: true
			}
		}, function () {
			db.runSql(
				'ALTER TABLE role_permissions ADD CONSTRAINT '+
					'role_permissions_pkey PRIMARY KEY (user_role_id , permission , entity )',
				callback
			);
		}
	);
};

exports.down = function(db, callback) {
	db.dropTable('role_permissions', callback);
};
