var WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
var BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

var keys = document.querySelectorAll('.key')
var whiteKeys = document.querySelectorAll('.key.white')
var blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    var key = e.key
    var whiteKeyIndex = WHITE_KEYS.indexOf(key)
    var blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    var noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

// import * as Tone from 'tone'

// //create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();

// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");