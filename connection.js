 // XAMPP
 const mysql  = require("mysql2"); // mysql2 is a module that is used to connect to the mysql database
 const db = mysql.createConnection({ // createConnection is a method that is used to connect to the database
     host: 'localhost', // this is the host name of the database, if you are using xampp then it is localhost
     user: 'root', // this is the username of the database, if you are using xampp then it is root
     password: '',      // this also could be root
     database: 'webdev', // this is the name of the database
     port: '3306' // this is the port number of the database, if you are using xampp then it is 3306
 });
 
 db.connect( (err)=> {
     if(err) throw err;
 });
 
 module.exports = db;
 