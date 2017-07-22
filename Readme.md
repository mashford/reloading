##reloading
A chrome extension watching a file and reload a broswer page automatically on every changes

##How to use
It requires a Node.js server(server.js) to function.  So check the `server` folder and run 
```sh
npm install
node server.js
```
And when the extension icon becomes green, it is ready to work.  <br>
If it does not turn green automatically, try clicking it.


##Configration
Black boxes are not cool. You are encouraged to explore the code and generate your own version after giving a star to this one.  <br>

* to change the `port` used by the server (default to be 8888), check `server/server.js` and `js/background.js`
* to change the `file` watched, check `server/server.js`
* to alter the `pages` to be reloaded, check `js/background.js`
 
##Plateform
It was tested with `ubuntu 16.04LTS` and `chromium 59.0.3071.109`

##Dependence
* [socket.io](https://github.com/socketio/socket.io)
* [socket.io-client](https://github.com/socketio/socket.io-client)

