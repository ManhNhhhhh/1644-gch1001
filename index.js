const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) =>{
        if (err) {
            console.error(err);
        } else {
            res.write(data);
            res.end;
        }
    });
  } else if (req.url === "/greenwich"){
    fs.readFile("./greenwich.html", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end;
        }
    });
  } else if (req.url === "/cloud"){
    fs.readFile("./cloud.html", (err, data) => {
        res.write(data);
        req.end;
    });
    
  } else {
    res.end("<h1>404 : Page not found</h1<");
  }

  })

.listen(process.env.PORT || 3000) ;