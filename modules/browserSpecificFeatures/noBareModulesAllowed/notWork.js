/*
パスが付いていない(名前だけの)モジュールをbare moduleと呼ぶ
ブラウザ環境において、import文の引数にbare moduleは指定できない。
node.jsなど環境によってはbare moduleを使える場合もある。
*/
import {sayHi} from 'say' //Uncaught SyntaxError: Cannot use import statement outside a module