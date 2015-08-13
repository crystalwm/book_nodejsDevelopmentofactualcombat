/**
 * Created by John on 2015-08-13.
 */

var http=require('http');
var url=require('url');
var router=require('./parse_dns_router.js');

var server=http.createServer(function(req,res){

    var pathname=url.parse(req.url).pathname;

    router.router(req,res,pathname);

});

server.listen(8112);
