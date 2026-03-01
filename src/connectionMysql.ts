import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
dotenv.config();

const host = process.env.MYSQL_HOST || 'localhost';
const user = process.env.MYSQL_USER || 'root';
const password = process.env.MYSQL_PASS || 'password';
const database = process.env.MYSQL_DATABASE || 'mysql_the_project';

const mysqlpool = mysql.createPool({ host, user, password, database });

export default mysqlpool;
