/**
 * Created by John on 2015-08-14.
 */
/*
* Student模块继承Person模块
* */

var util=require('util');
var Person=require('./Person.js');

function Student(){
    Person.call(this);
}

util.inherits(Student,Person);

Student.prototype.play=function(){
    console.log('学生会玩！');
}

module.exports=Student;