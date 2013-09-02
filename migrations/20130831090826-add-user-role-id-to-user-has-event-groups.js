var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.addColumn(
		'user_has_event_groups',
		'user_role_id',
		{
			type: 'string',
			length: 50,
			notNull: false
		},
		function(){
			db.runSql(
				"ALTER TABLE user_has_event_groups "+
					"ADD CONSTRAINT user_has_event_groups_user_role_id_fkey " +
					"FOREIGN KEY (user_role_id) REFERENCES user_roles (id) " +
					"ON UPDATE SET NULL ON DELETE SET NULL",
				callback
			);
		}
	);
};

exports.down = function(db, callback) {
	db.runSql(
		'ALTER TABLE user_has_event_groups '+
			'DROP CONSTRAINT user_has_event_groups_user_role_id_fkey',
		function () {
			db.removeColumn(
				'user_has_event_groups',
				'user_role_id',
				callback
			)
		}
	);
};
