//chrome.tabs.getCurrent(function(tab){
//	console.log(tab)
//})
var p = document.getElementById('p')
var counter = 0
setInterval(function(){
	counter += 1
	p.innerHTML = counter
},2000)

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")//判断是否为要处理的消息
      sendResponse({farewell: "goodbye"});
});