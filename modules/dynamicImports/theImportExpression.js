/*
import(...)
・動的にモジュールをimport出来る！
*/
let modulePath = prompt("Which module to load?");
import(modulePath)
.then(obj => alert("Success!"))
.catch(alert);

import('./say.js')
.then(say => {say.hi(); return say;})
.then(say => say.bye());

/*
もちろん、async-awaitに書くことも可能
async function()
{
    let {hi, bye} = await import('..');
    hi();
    bye();
}
*/