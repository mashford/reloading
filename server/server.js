let server = require('http').createServer();
let io = require('socket.io')(server);
const event = require('events')
let onfile = new event()
let fs = require('fs')
let watchedFileName = 'test.js'/////////change here
let signal = false

function watchSingle(watchedFileName) {
    fs.watch(watchedFileName,(event,filename) => {
        if(event=='change'){
            oneEmit(onfile)           
        }
    })
}
function oneEmit (on) {
    if (!signal){
        signal = true
        console.log('event')
        on.emit('change')//Triger a change event
        setTimeout(() =>{signal = false},200)
    } else {
        return
    }
}
//Start watching file
watchSingle(watchedFileName)

io.on('connection', (c) => {
    console.log('connect')
    c.on('ready', () => {
        console.log('client is ready!')
    })
    onfile.on('change', () => {
        c.emit('goreload', {hello:'world'})//Triger an event to background page
        watchSingle(watchedFileName)
    })
    c.on('finished', () => {
        console.log('finished')
    })
    c.on('disconnect', () => {
        console.log('disconnected!')
    })
})
server.listen(8888)


