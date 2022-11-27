var express = require('express');
 var path = require('path');
 var app = express();
 var PORT = 5000;

 fs = require('fs');
 app.use(express.json())


app.use(express.static(path.join(__dirname, '../public')));


app.get('/get', (req, res) => {
  fs.readFile('../public/ratings.json', 'utf-8', (err, data) => {
      if (err) {
          return res.status(500).json({
              error: err.message
          })
      }
      const db = JSON.parse(data)
      console.log(db)
      res.status(200).json(db)
  })
  
});

 let logArr = []
const log = (result, req) => {
  console.log(result)
  logArr.push(`${result[result.length-1].name} added ${result[result.length-1].score} from ${req.ip}`)
  fs.writeFile('../public/log.json', JSON.stringify(logArr, null, '  '), function (err) {
    if (err) return console.log(err);
  })
}

app.post('/post', (req, res) => {
  fs.writeFile('../public/ratings.json', JSON.stringify(req.body), function (err) {
      if (err) return console.log(err);
      let result = (req.body);
      log(result, req)
      res.status(200).json(result);
  });
});

app.post('/clear', (req, res) => {
  fs.writeFile('../public/ratings.json', '[]', function (err) {
      if (err) return console.log(err);
      let result = (req.body);
      res.status(200).json(result);
  });
});




app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})