import * as user from './user.js';

/*
ワイルドカードでまとめた場合は、.defaultがexport defaultを指す。
*/
let User = user.default;
let myUser = new User("Mary");
user.sayHi(myUser.name);