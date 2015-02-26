/* 
 server.js
 
 Example Project for Introduction to Redis <http://intro2libys.info/introduction-to-redis>

 Copyright 2015 by Jeremy Nelson
 Software licensed under the GPLv3
*/
var http = require('http');
var express = require('express'),
  app = express(),
  swig = require('swig'),
  path = require('path'),
  redis = require('redis'),
  client = redis.createClient();

app.use("/media", express.static(path.join(__dirname,  "media")));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get("/", function(request, response) {
  response.render("index", { info: client.server_info });
});

app.listen(20153);
console.log("Elves Kanban4toys Node.js/Redis Project running at localhost:20153");
