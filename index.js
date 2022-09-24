const http = require("htpp");
http.createserver((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type" , "text/html");
    res.end("<h1>Heroku deployment tutorial<h1>");
})
.listen()
