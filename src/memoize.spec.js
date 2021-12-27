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
        assert()
    });


})

