class eventEmitter {
	constructor() {
		this.eventBuffer = new Array()
	}
	emit(string) {
		let st = string + ''
        try {
        	setTimeout(this.st (),0)
        } catch (e){
        	this.eventBuffer.push(st)
        }
	}
	on(string, func){
		let st = string + ''
		for (let i=0; i<this.eventBuffer; i++){
			if (st == this.eventBuffer[i]){
				this.eventBuffer.splice(i,1)
				setTimeout(func(),0)
				break
			} else {}
		}
		this.st = func
	}
}

//let goose = new eventEmitter()
//
//goose.on('goo', () => {
//	console.log('goose')
//})
//
//goose.emit('goo')
//asas
sadasda





asd






af
