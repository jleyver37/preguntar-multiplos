let Numero = 0
let Contador = 0
input.onButtonPressed(Button.A, function () {
    Numero = 0
    Numero += randint(1, 6)
    Contador = 1
    for (let index = 0; index < Numero; index++) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    Numero = 0
    Numero += randint(1, 6)
    Contador = 1
    for (let index = 0; index < Numero; index++) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.showNumber(Contador)
        Contador += 1
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Numero = 0
    Numero += randint(1, 6)
    Contador = 1
    for (let index = 0; index < Numero; index++) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.pause(1000)
        basic.showNumber(Contador)
        Contador += 1
        basic.pause(1000)
        basic.clearScreen()
    }
})
