input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    inkybit.clear()
    inkybit.drawIcon(
    IconNames.Giraffe,
    76,
    52,
    inkybit.Color.Black,
    inkybit.TextSize.Regular
    )
})
music.setVolume(51)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
	
})
