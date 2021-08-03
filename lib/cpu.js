const si = require('systeminformation');

let observer;

function cpu(option) {};

cpu.prototype.getData = function () {
    return si.cpu();
};

cpu.prototype.observer = function(options) {
    const userCallback = (data) => {
        console.log(data)
    };
    this.observer = si.observe(options, 1000, userCallback);
};

cpu.prototype.closeObserver = function(){
    clearInterval(this.observer);
};

module.exports = cpu;
