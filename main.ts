// 5
// 10
// 1
// 1
let 熱圾車 = [
659,
622,
659,
622,
659,
494,
587,
523,
220,
330,
440,
262,
330,
440,
494,
659,
831,
494,
659
]
let 熱射車圖 = images.createBigImage(`
    . # # . # # # # . .
    # . # . # . . . # .
    # # # # # . . . . #
    # # # # # # # # # #
    . # # . . . # # . .
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    for (let index = 0; index <= 熱圾車.length - 1; index++) {
        music.playTone(熱圾車[index], music.beat(BeatFraction.Half))
        熱射車圖.showImage(-5 + index, 0)
    }
    basic.clearScreen()
})
