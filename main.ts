let A = 0
let B = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(A + B)
})
input.onButtonPressed(Button.A, function () {
    A = randint(0, 900)
    basic.showNumber(A)
})
input.onButtonPressed(Button.B, function () {
    B = randint(0, Math.PI + 10000)
    basic.showNumber(B)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(A - B)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(A * B)
})
