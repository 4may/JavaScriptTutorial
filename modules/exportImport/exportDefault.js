/*
import側に優しい書き方
export default ...とすると、import User from './exportDefault.js'のように{}無しでimport出来る。

慣習的に、default exportを使う場合、他にexportは書かない。

ちなみに、export default自体は1ファイルにつき1つのみであるため、export対象の名前は省略可能
export default class{...}
export default function(){...}
export default [...]
*/
export default class User
{
    constructor(name)
    {
        this.name = name;
    }
}