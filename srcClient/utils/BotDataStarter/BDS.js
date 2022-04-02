const mysql = require('mysql')
const { cfx } = require('../../../../cfx')
let SQL = mysql.createConnection({
    host: cfx.MySQLSettings.Host,
    user: cfx.MySQLSettings.User,
    password: cfx.MySQLSettings.pwd,
    database: cfx.MySQLSettings.database
})
const BDS = {}
/**
 * 
 * @param {name} name Specifies the database name 
 */
BDS.StartSqlConnection = () => {
    SQL.connect(function (err) {
        console.log(err)
    })
};

const Status = SQL.ping
BDS.ping = Status;
module.exports = {
    BDS
}