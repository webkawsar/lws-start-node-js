const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register bellRing listener
emitter.on('bellRing', ({ period, duration }) => {
    console.log(`We need to run cause ${period} ${duration}`);
});

// raise an event
emitter.emit('bellRing', {
    period: 'second',
    duration: '45Min',
});
