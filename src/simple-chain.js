const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chains: [],

    getLength() {
        return this.chains.length;
    },
    addLink(value = '') {
        this.chains.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (!this.chains[position - 1]) {
            this.chains = [];
            throw new Error();
        }
        this.chains.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chains.reverse();
        return this;
    },
    finishChain() {
        let result = this.chains.reduce((acc, cur) => `${acc}~~${cur}`);
        this.chains = [];
        return result;
    }
};

module.exports = chainMaker;

