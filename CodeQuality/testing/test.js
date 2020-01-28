describe("pow", function()
    {
        //nested describe
        describe("raises x to power 3", function()
        {
            function makeTest(x)
            {
                let expected = x * x * x;
                it(`${x} in the power 3 is ${expected}`, function()
                {
                    assert.equal( pow(x, 3), expected);
                }
                );
            }

            for(let x = 1; x <=5; x++)
            {
                makeTest(x);
            }
        }
        );

        //対象のユースケースを記載。人間が読める形式で書く。
        it("2 raised to power 3 is 8", function()
        {
            //テスト関数
            assert.equal(pow(2, 3), 8);
        });

        //1it1assertがおすすめ。
        //it内では、assertエラーが発生した場合、次以降のassert文は実行されないため。
        it("3 raised to power 4 is 81", function()
        {
            //テスト関数
            assert.equal(pow(3, 4), 81);
        });

        
        
    });