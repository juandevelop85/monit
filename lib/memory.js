const si = require('systeminformation');

let observer;

function memory(option) {};

memory.prototype.getData = function () {
    return si.mem();
};

memory.prototype.getDataLayout = function () {
    return si.memLayout();
};

memory.prototype.observer = function(options) {
    const userCallback = (data) => {
        console.log(data)
    };
    this.observer = si.observe(options, 1000, userCallback);
};

memory.prototype.closeObserver = function(){
    clearInterval(this.observer);
};

module.exports = memory;
