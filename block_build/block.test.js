// const { beforeEach } = require('node:test');
const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('sets the data to match given input ', () => {
        expect(block.data).toEqual(data);
    });

    it('sets the `lastHash` to match the hash of the previous block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });    
});