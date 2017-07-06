let server = require('http').createServer();
let io = require('socket.io')(server);


function l (data) {console.log(data)}

io.on('connection', function(c){
    l('connect')
    c.on('ready', function(data){
        console.log('client is ready!')
    })
    //c.emit('event', {hello:'world'})
    let asTT = setInterval(function(){
        c.emit('event', {hello:'world'})
    }, 5000);
    c.on('finished',function(data){
        clearInterval(asTT)
    })
    c.on('disconnect', function(){
        console.log('disconnected!')
    })
})
server.listen(8888)


