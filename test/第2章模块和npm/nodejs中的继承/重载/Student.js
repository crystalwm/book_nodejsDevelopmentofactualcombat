/**
 * Created by John on 2015-08-14.
 */
/*
* Student模块继承Person模块
* */

var util=require('util');
var Person=require('./Person.js');


/*
* 如果我要重载person类的eat方法
* */
function Student(){
    Person.call(this);
    this.eat=function(){
        console.log('学生在吃！');
    }
}

util.inherits(Student,Person);

Student.prototype.play=function(){
    console.log('学生会玩！');
}



module.exports=Student;