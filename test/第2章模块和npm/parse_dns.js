/**
 * Created by John on 2015-08-13.
 */
/*
创建一个http服务器，并返回parse_dns.html
* */
/*
* 如果pathname=='/',则返回parse_dns.html页面
* 如果pathname=/parse,则返回dns查询结果
* */
var http=require('http');
var fs=require('fs');
var path=require('path');
var url=require('url');
var querystring=require('querystring');
var dns=require('dns');

var server=http.createServer(function(req,res){

    var pathname=url.parse(req.url).pathname;

    console.log(pathname);

    if(pathname=='/')
    {
        res.writeHead(200,{
            'content-type':'text/html'
        });

        var filename=path.join('d:/WebStorm9.0.2/book_nodejsDevelopmentofactualcombat/views','parse_dns.html');

        console.log(filename);

        var buf=fs.readFileSync(filename);

        res.end(buf);
    }
    if(pathname=='/parse_dns'){


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


});

server.listen(8011);
