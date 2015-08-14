/**
 * Created by John on 2015-08-13.
 */
var path=require('path');
var fs=require('fs');
var querystring=require('querystring');
var dns=require('dns');

function goIndex(req,res){

    res.writeHead(200,{
        'content-type':'text/html'
    });
   // var filename=path.join('d:/WebStorm9.0.2/book_nodejsDevelopmentofactualcombat/views','parse_dns.html');
   var filename=path.join('/views','parse_dns.html');
    var buf=fs.readFileSync(filename);
    res.end(buf);

}

function resolveDNS(req,res){
    var hostname="";
    var search_result="";

    req.setEncoding('utf-8');
    req.on('data',function(chunked){
        hostname=querystring.parse(chunked).search;

        dns.lookup(hostname, function (err, address, family ){

            search_result="Domain:"+hostname+"IP:"+address;

            console.log(search_result);
            res.writeHead(200,{'content-type':"text/plain"});

            res.end(search_result);
        });

    });

}

exports.goIndex=goIndex;
exports.resolveDNS=resolveDNS;