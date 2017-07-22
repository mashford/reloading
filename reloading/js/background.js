let triger = () => {
	chrome.tabs.query(
        {active: true, currentWindow: true}, 
        (tabs) => {
            chrome.tabs.reload(
                tabs[0].id, 
                {bypassCache:true}, 
                () => {})
	    });
}

let socketSwitch = () => {
    if (socket.id){
        socket.close()
        serverReadiness = true
    } else {
        try {
            socket.open()
        } catch (e) {
            serverReadiness = false
            throw e
        }
    }
}



let socket = io('http://localhost:8888');

setTimeout(() =>{
    if (!socket.id)
    socket.close()
},1500)

socket.on('connect', () => {
    chrome.browserAction.setIcon({path: {'19': 'images/green_19.png'}});   
    console.log('ready')
});
socket.on('goreload', (data) => {
    triger()
    console.log('goreload')   
});
socket.on('disconnect', () => {
    chrome.browserAction.setIcon({path: {'19': 'images/gray_19.png'}});
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    socketSwitch()
});
