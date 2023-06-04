input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(x + y)
})
input.onButtonPressed(Button.A, function () {
    x += 1
    basic.showNumber(x)
})
input.onButtonPressed(Button.AB, function () {
    x = 0
    y = 0
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(x - y)
})
input.onButtonPressed(Button.B, function () {
    y += 1
    basic.showNumber(y)
})
let y = 0
let x = 0
x = 0
y = 0
