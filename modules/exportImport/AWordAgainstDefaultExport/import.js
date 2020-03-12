/*
export defaultで公開されている物は、任意の名前が付けられる。
*/
import MyUser from './user.js';

let user = new MyUser("John");
alert(user.name);