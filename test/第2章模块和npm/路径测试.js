/**
 * Created by John on 2015-08-13.
 */

var dns=require('dns');
var hostname="www.baidu.com"

dns.lookup(hostname, function (err, address, family ){

    search_result="Domain:"+hostname+" IP:"+address;
    console.log(search_result);
});