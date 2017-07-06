
var clock_div = document.getElementById('clock_div');
//my_clock(clock_div);
function l (data){console.log(data)};
var counter = 0
var triger = function (){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          console.log(tabs[0].id)
          chrome.tabs.sendMessage(
            tabs[0].id, 
            {greeting: "hello"}, 
            function(response) {
                console.log(response);
                chrome.tabs.reload(tabs[0].id, {bypassCache:true},function(){})
        });
	});
}


var socket = io('http://localhost:8888');
socket.on('connect', function(){
	l('connect')

});
socket.on('event', function(data){
    counter += 1
    clock_div.innerHTML = counter;
    triger()
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //	console.log(tabs[0])
    //})
});
socket.on('disconnect', function(){l('disconnect')});
//chrome.tabs.getCurrent(function(tab){
//	console.log(tab)
//})
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    clock_div.innerHTML = message;
    sendResponse('Hello from background.');
});