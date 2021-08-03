const processes = require('./processes');
const processLoad = require('./processLoad');
const services = require('./services');

let Processes = new services({});

Processes.getData().then((data) => {
  
//   let out = data.list.filter((item) => {
//     return item.command === 'node';
//   })
  console.log(data)
});
