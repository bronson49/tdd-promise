import MyPromise from "./promise";
const myPromise = MyPromise;

describe('my Promise:', ()=>{

    test('promise should exist and function', ()=>{

        expect(myPromise).toBeDefined();
        expect(typeof myPromise).toBe('function');

    });

})