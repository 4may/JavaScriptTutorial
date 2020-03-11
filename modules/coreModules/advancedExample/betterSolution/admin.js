/*
最低限の「雛形」だけ用意する。
具体的な内容(プロパティの値)は呼び出し側に決めてもらう。
*/
export let admin = {};

export function sayHi()
{
    alert(`Ready to serve, ${admin.name}`);
}