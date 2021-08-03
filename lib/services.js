const si = require('systeminformation');

let observer;

function services(option) {};

services.prototype.getData = function () {
    return si.services('node');
};

services.prototype.observer = function(options) {
    const userCallback = (data) => {
        console.log(data)
    };
    this.observer = si.observe(options, 1000, userCallback);
};

services.prototype.closeObserver = function(){
    clearInterval(this.observer);
};

module.exports = services;
