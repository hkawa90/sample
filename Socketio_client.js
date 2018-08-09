const io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');

let sender = (event, msg) => {
    return new Promise((resolve, reject) => {
        // TODO ackをうけとりresolev, timeout/disconnectであればreject
        socket.emit(event, msg, (data) => {
            if (data === 'ACK') {
                resolve();
                console.log('ACK');
            } else {
                console.log('NACK');
                reject();
            }
        })
        //console.log(msg)
    })
}
socket.on('connect', ()=> {
    sender('data', 'Simple message...').
    then(sender('data', 'Disconnect...')).
    then(socket.disconnect())
}) 


