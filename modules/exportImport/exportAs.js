/*
内部で付けている名前とは別の名前で公開することが出来る
*/

function sayHi(user)
{
    alert(`Hello, ${user}`);
}

function sayBye(user)
{
    alert(`Bye, ${user}`);
}

export {sayHi as hi, sayBye as bye};