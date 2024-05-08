import mysql from "mysql2/promise"

const connection = await mysql.createConnection({
    host: 'database-1.crgmwa8m4s4q.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Kane3412',
    database: 'user',
});

try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
  
  // Using placeholders
  try {
    const [results] = await connection.query(
      'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
      ['Page', 45]
    );
  
    console.log(results);
  } catch (err) {
    console.log(err);
  }