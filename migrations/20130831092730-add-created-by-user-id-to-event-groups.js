var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.addColumn(
		'event_groups',
		'created_by_user_id',
		{
			type: 'int',
			noNull: true
		},
		function(){
			db.runSql(
				'ALTER TABLE event_groups '+
					'ADD CONSTRAINT event_groups_created_by_user_id_fkey '+
					'FOREIGN KEY (created_by_user_id) REFERENCES users (id) '+
					'ON DELETE RESTRICT ON UPDATE CASCADE',
				callback
			);
		}
	);
};

exports.down = function(db, callback) {
	db.runSql(
		'ALTER TABLE event_groups '+
			'DROP CONSTRAINT event_groups_created_by_user_id_fkey',
		function () {
			db.removeColumn(
				'event_groups',
				'created_by_user_id',
				callback
			);
		}
	);
};
