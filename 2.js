var fs=require("fs");
var http=require("http");
var querystring=require("querystring");
http.createServer(function(req,res){
    fs.readFile("./1.html",function(err,data){
      if(err){
        console.log(err);
      }else{
        res.writeHead(200,{"Content-Type":"text-plain"});
        res.write(data.toString());
      }
      res.end();
    });
}).listen(8080);