import {describe,beforeEach, it} from 'mocha';
import {expect} from 'chai';
import {memoize} from './memoize.js';

describe( 'base test', () => {
    it('should be a function', () =>{
        expect(memoize).to.be.a('function')
    });

    it('should return undefined if no function provided', ()=>{
        [undefined, null, 123, {}].forEach((arg) => {
            expect(memoize(arg)).to.be.an('null');
        })
    });

    it('should return some function if function provided', () =>{
        expect(memoize(() => {})).to.be.a('function');
    });

})

describe( 'Primitive test', () => {
    const mult2 = arg => arg + arg;
    const inc1 = i => i+1;

    let mMult2;
    let mInc1;

    beforeEach(()=>{
        mMult2 = memoize(mult2);
        mInc1 = memoize(inc1);
    });

    it('should return the same values as the original function', () =>{
        [1,100, '1', 'hi'].forEach(arg => {
            expect(mMult2(arg)).to.equals(mult2(arg));
            expect(mInc1(arg)).to.equals(inc1(arg));
        });
    });

    it('is not equal to the original function', () => {
        expect(memoize(inc1))
            .to.be.a('function')
            .and.to.not.equal(inc1);
    });

    it('is not equal to the original function', () => {
        expect(memoize(inc1))
            .to.be.a('function')
            .and.to.not.equal(inc1);
    });

})

describe( 'Object test', () => {
    const getParametr = arg => arg['test'];
    const paramsCount = arg => Object.keys(arg).length;

    let mGetParm;
    let mParamsCount;

    beforeEach(()=>{
        mGetParm = memoize(getParametr);
        mParamsCount = memoize(paramsCount);
    });

    it('should return the same values as the original function', () =>{
        [{}, {'test': 1}, {'test1': 'hi'}].forEach(arg => {
            expect(mGetParm(arg)).to.equals(getParametr(arg));
            expect(mParamsCount(arg)).to.equals(paramsCount(arg));
        });
    });

})
