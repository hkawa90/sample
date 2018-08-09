var io = require('socket.io')();
io.on('connection', function(client){
    client.on('data', function(data){
        console.log('data:' + data)
        client.emit('ACK');
    });
    client.on('disconnect', function(){
        console.log('disconnected...')
    });
});
io.listen(3000);