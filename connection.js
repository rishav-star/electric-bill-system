const mysql = require("mysql")

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123',
    database: 'bill'
});

db.connect(err => {
    if(err) throw err;
    console.log("Connected to mysql");

})

db.connect(function(err) {
    db.query("SELECT * FROM details", function (err, result, fields) {
        console.log(result)
        if (err) throw err;
        let id=result.cust_id;
        let email= result.email;
        let name= result.name;
        let units= result.units;
        let address= result.address;
        // console.log(id);
    });
});

module.exports = db;