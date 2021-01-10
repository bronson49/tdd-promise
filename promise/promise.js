// https://youtu.be/SQMCtWnCxEA

class MyPromise {
    constructor(executor) {
        if (typeof executor === 'function'){
            this.queue = [];
            this.error = ()=>{};
            executor.call(null, this.onResolve.bind(this), this.onReject.bind(this));
        }
    }

    onResolve(data){
        this.queue.forEach(callback=>{
            data = callback(data);
        });
    }
    onReject(err){
        this.error(err);
    }

    then(fn){
        this.queue.push(fn);
        return this;
    }

    catch(fn){
        this.error = fn ;
        return this;
    }

    finally(fn){}
}

export default MyPromise

// const promise = new MyPromise((resolve)=>{
//     setTimeout(()=>{
//         console.log('hello 33')
//         resolve(42);
//     }, 1500)
//
// })
//
// promise.then((response)=>{
//     setTimeout(()=>{
//         console.log('response=', response)
//     }, 1500)
// })