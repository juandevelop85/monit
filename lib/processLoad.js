const si = require('systeminformation');

let observer;

function processLoad(option) {};

processLoad.prototype.getData = function () {
    return si.processLoad('node');
};

processLoad.prototype.observer = function(options) {
    const userCallback = (data) => {
        console.log(data)
    };
    this.observer = si.observe(options, 1000, userCallback);
};

processLoad.prototype.closeObserver = function(){
    clearInterval(this.observer);
};

module.exports = processLoad;
