const pool = require("../database/db");
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("data-siswa.csv")

pool.connect((err, client, done) => {
  if (err) throw err;

  client.query("SELECT * FROM siswa", (err, res) => {
    done();

    if (err) {
      console.log(err.stack);
    } else {
      const jsonData = JSON.parse(JSON.stringify(res.rows));
      console.log("jsonData", jsonData);

      fastcsv
        .write(jsonData, { headers: true })
        .on("finish", function() {
          console.log("Write to data-siswa.csv successfully!");
        })
        .pipe(ws);
    }
  });
});
