/*
default as XXX によって、default exportを指す。
*/
import {default as User, sayHi} from './user.js';

let user = new User("John");
sayHi(user.name);