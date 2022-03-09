input.onButtonPressed(Button.A, function () {
    radio.sendString("hi")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("sirs coming ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("want play terratorial")
})
radio.setGroup(69)
basic.forever(function () {
	
})
