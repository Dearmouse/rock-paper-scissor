let _ = 0
input.onGesture(Gesture.Shake, function () {
    _ = 0
    _ = randint(0, 2)
    if (_ == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (_ == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (_ == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
