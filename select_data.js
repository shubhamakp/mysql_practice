const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'shubham',
    user : 'root',
    password: 'mypass'
})

connection.query(
    `select * from persons`,
    function(err,rows,cols){
        if(err)
        console.log(err)
        else{
            console.log(rows)
            console.log(cols)
        }
        connection.close();
    
})