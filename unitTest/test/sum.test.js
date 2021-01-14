//引入函式
//定義常數 名稱 = 從 ./index 引入
const sum = require('../sum');

/*
| test( "情境說明" , () => {
| expect( 常數名(參數, 參數) ).toBe(結果);
| });
*/

describe('測試 function - sum()', () => {

    //情境說明：用文字表述運作的方式
    test('a=1, b=2 加起來等於3', () => {
        //測試的過程：依據情境說明 撰寫測試
        expect(sum(1, 2)).toBe(3);
    });

});