import MyPromise from "./promise";
import 'regenerator-runtime/runtime';
const myPromise = MyPromise;

describe('my Promise:', ()=>{

    const testNum= 44;
    let promise, executorFunc

    beforeEach(()=>{
        executorFunc = jest.fn((resolve)=>{
            return setTimeout(()=>{
                return resolve(testNum);
            },1500);
        });
        promise = new myPromise(executorFunc);
    })

    test('promise should exist and function', ()=>{
        expect(myPromise).toBeDefined();
        expect(typeof myPromise).toBe('function');
    });

    test('should have methods', ()=>{
        expect(promise.then).toBeDefined();
        expect(promise.catch).toBeDefined();
        expect(promise.finally).toBeDefined();
    });

    test('should call executor function', ()=>{
        expect(executorFunc).toBeCalled();
    });

    test('should get data and chain', async ()=>{
        const result = await promise.then(res=> res *2 );

        expect(result).toBe(testNum * 2);
    });


})