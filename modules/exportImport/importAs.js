/*
importするものに別の名前をつけることもできる。
*/
import {sayHi as hi, sayBye as bye} from './exportApartFromDeclarations.js';

hi("John");
bye("John");