// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// const startPeriod = () => {
//     console.log('class started');

//     // raise an event
//     emitter.emit('bellRing', {
//         period: 'second',
//         duration: '45Min',
//     });
// };

// module.exports = startPeriod;

const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('class started');

        // raise an event
        this.emit('bellRing', {
            period: 'second',
            duration: 'bell ring',
        });
    }
}

module.exports = School;
