let Contador = 0
let Numero = 0
input.onButtonPressed(Button.A, function () {
    Contador = 0
    Numero = 0
    Numero += randint(2, 8)
    basic.showNumber(Numero)
    basic.clearScreen()
    for (let index = 0; index < randint(2, 8); index++) {
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
        Contador += 1
        basic.showNumber(Numero * Contador)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    Contador = 0
    Numero = 0
    Numero += randint(2, 8)
    basic.showNumber(Numero)
    basic.clearScreen()
    for (let index = 0; index < randint(2, 8); index++) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        Contador += 1
        basic.showNumber(Numero * Contador)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Numero = 0
    Numero += randint(2, 8)
    basic.showNumber(Numero)
    basic.clearScreen()
    for (let index = 0; index < randint(2, 8); index++) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . #
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
    }
})
