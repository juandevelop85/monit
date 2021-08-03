const si = require('systeminformation');

let observer;

function processes(option) {};

processes.prototype.getData = function () {
    return si.processes();
};

processes.prototype.getDataLayout = function () {
    return si.memLayout();
};

processes.prototype.observer = function(options) {
    const userCallback = (data) => {
        console.log(data)
    };
    this.observer = si.observe(options, 1000, userCallback);
};

processes.prototype.closeObserver = function(){
    clearInterval(this.observer);
};

module.exports = processes;
