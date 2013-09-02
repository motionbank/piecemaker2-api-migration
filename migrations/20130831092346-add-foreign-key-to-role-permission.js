var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.runSql(
		'ALTER TABLE role_permissions '+
			'ADD CONSTRAINT role_permissions_user_role_id_fkey '+
			'FOREIGN KEY (user_role_id) REFERENCES user_roles (id) '+
			'ON DELETE CASCADE ON UPDATE CASCADE',
		callback
	);
};

exports.down = function(db, callback) {
	db.runSql(
		'ALTER TABLE role_permissions '+
			'DROP CONSTRAINT role_permissions_user_role_id_fkey',
		callback
	);
};
