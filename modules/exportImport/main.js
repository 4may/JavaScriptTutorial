/*
関数や変数を個別に指定する方法と、まとめて指定する方法がある
できれば、個別に指定するべき。個別に指定するメリットは以下の通り。
・ビルド物が軽くなる。
　・ビルド時の最適化処理によって、使われていない関数を省くことが出来る。
・使うときのコード量が少なくて済む
　・sayHi vs say.sayHi
・コードの構造がわかりやすい
　・どの処理がどこで使われるのか
*/

//import {sayHi, sayBye} from './exportApartFromDeclarations.js';
import * as say from './exportApartFromDeclarations.js';

say.sayHi('John');
say.sayBye('John');