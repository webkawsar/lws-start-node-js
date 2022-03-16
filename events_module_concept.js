// const EventEmitter = require('events');
// const startPeriod = require('./school');

// const emitter = new EventEmitter();

// // Register bellRing listener
// emitter.on('bellRing', ({ period, duration }) => {
//     console.log(`We need to run cause ${period} ${duration}`);
// });
// startPeriod();

const School = require('./school');

const school = new School();

// // Register bellRing listener
school.on('bellRing', ({ period, duration }) => {
    console.log(`We need to run cause ${period} ${duration}`);
});

school.startPeriod();
