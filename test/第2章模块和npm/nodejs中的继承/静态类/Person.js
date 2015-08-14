/**
 * Created by John on 2015-08-14.
 */
/**
 * Person类中有两个方法eat  sleep
 * */

function Person(){
    this.name="person";

}
Person.prototype.eat=function(){
    console.log('eat');
}

Person.prototype.sleep=function(){
    console.log('sleep');
}

module.exports=Person;