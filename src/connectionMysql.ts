import mysql from 'mysql2/promise';

const host = process.env.MYSQL_HOST || 'localhost';
const user = process.env.MYSQL_USER || 'root';
const password = process.env.MYSQL_PASS || 'test1234';
const database = process.env.MYSQL_DATABASE || 'mysql_the_project';

const mysqlpool = mysql.createPool({ host, user, password, database });

export default mysqlpool;
