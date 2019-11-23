const mysql = require('mysql2')
const connection = mysql.createConnection({
    host : 'localhost',
    database : 'shubham',
    user : 'root',
    password: 'mypass'
})

connection.query(
    `create table if not exists persons(
        id integer auto_increment primary key,
        name varchar(20) not null,
        age integer not null,
        city varchar(30)
    )`,
    function(err,results)
    {
        if(err)
        console.log(err)
        else
        console.log("table created successfully")
        connection.close();
    }
    
)