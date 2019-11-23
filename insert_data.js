const mysql = require('mysql2')

const insert = {
    name : process.argv[2],
    age : parseInt(process.argv[3]),
    city : process.argv[4]
}
const connection = mysql.createConnection({
    host : 'localhost',
    database : 'shubham',
    user : 'root',
    password: 'mypass'
})

connection.query(
    `insert into persons (name,age,city) values(
        '${insert.name}',
        '${insert.age}',
        '${insert.city}'
    )`,
    function(err,results){
        if(err)
        console.log(err)
        else{
            console.log(results)
            console.log("inserted successfully")
        }
        connection.close();
    
})