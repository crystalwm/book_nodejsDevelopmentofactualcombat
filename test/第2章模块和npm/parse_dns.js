/**
 * Created by John on 2015-08-13.
 */
/*
创建一个http服务器，并返回parse_dns.html
* */
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){

    res.writeHead(200,{
        'content-type':'text/html'
    });

    var filename=




});

server.listen(8011);
