
const { error } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json())
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
})

app.post('/createuser', (req, res)=>{
  console.log("dkhvakhkhgwhd");
  console.log(req.body);
  var user = "/accounts/"+req.body.username
  fs.stat("/accounts/"+req.body.username, (err, stat)=>{
    if (err){
      fs.mkdir(user, (err)=>{
        if (err){
          res.sendStatus(500)
        }
        else{
          fs.writeFile(user+"/password.txt", req.body.password, (err)=>{
            if (err){
              res.sendStatus(500);
            }
            else{
              res.send("1")
            }
          })
        }
      })
    }
    else{
      var pass = fs.readFile(user+"/password.txt", (err, data)=>{
        if (data == req.body.password){
          res.send("0")
        }
        else{
          res.sendStatus(401);
        }
      })
    }
  });
});

app.listen(80, () => {
    console.log(`Server started!`);
});
