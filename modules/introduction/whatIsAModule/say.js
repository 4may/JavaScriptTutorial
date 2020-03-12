/*
    1モジュール＝1ファイル
    モジュールのやりとりに使うsyntax
    ・export : モジュール外に公開したい変数・関数につける
    ・import : 参照したいモジュール外の変数・関数につける
*/
export function sayHi(user)
{
    alert(`Hello, ${user}`);
}