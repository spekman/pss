var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1257',
  database : 'pss',
  multipleStatements: true
});

connection.connect(console.log('connected!'));

module.exports = connection