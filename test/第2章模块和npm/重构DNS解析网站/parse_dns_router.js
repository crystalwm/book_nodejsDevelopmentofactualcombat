/**
 * Created by John on 2015-08-13.
 */

var main=require('./parse_dns_control.js');

exports.router=function(req,res,pathname){
    switch (pathname){
        case '/':main.goIndex(req,res);
            break;
        case '/parse_dns':main.resolveDNS(req,res);
            break;
    }
}