/*
どんな名前でimportしても良い。
が、それだと同じモジュールを異なる名前でimportする事になりわかりづらい。(特にチーム開発の場合は)
ので、慣習的にファイル名をimport時の名前に使うことが多い。
ex)user.jsならUserとしてimportする
*/
export default class User
{
    constructor(name)
    {
        this.name = name;
    }
}