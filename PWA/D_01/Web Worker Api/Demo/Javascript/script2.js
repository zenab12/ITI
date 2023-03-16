onmessage = function(event){
    console.log(this)
    console.log(event.data)

    var sum = parseInt(event.data[0])+parseInt(event.data[1])
    this.postMessage([sum])
}