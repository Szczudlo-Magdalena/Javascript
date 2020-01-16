const clap = document.getElementById('aBoom')
const boom = document.getElementById('aClap')
const hihat = document.getElementById('aHi')
const openhat = document.getElementById('aOpen')
const ride = document.getElementById('aRide')
const snare = document.getElementById('aSnare')
const tink = document.getElementById('aTink')
const tom = document.getElementById('aTom')

const tit = document.getElementById('title')

const btnRecording1 = document.querySelector('#recording1')
const btnRecording2 = document.querySelector('#recording2')
const btnRecording3 = document.querySelector('#recording3')
const btnRecording4 = document.querySelector('#recording4')
const btnPlaying = document.querySelector('#playing')

const aBtn = document.querySelector('#aBtn')
const sBtn = document.querySelector('#sBtn')
const dBtn = document.querySelector('#dBtn')
const fBtn = document.querySelector('#fBtn')
const gBtn = document.querySelector('#gBtn')
const hBtn = document.querySelector('#hBtn')
const jBtn = document.querySelector('#jBtn')
const kBtn = document.querySelector('#kBtn')

btnRecording1.addEventListener('click', startRecording1)
btnRecording2.addEventListener('click', startRecording2)
btnRecording3.addEventListener('click', startRecording3)
btnRecording4.addEventListener('click', startRecording4)

const channel1 = []
const channel2 = []
const channel3 = []
const channel4 = []

let channel1StartTime = 0
let channel2StartTime = 0
let channel3StartTime = 0
let channel4StartTime = 0


function startRecording1() {
    channel1StartTime = Date.now()
    console.log(channel1StartTime)
    channel1.forEach(el => {
        setTimeout(playSounds, el.time, el.code)
    })
    console.log('start')
}

function startRecording2() {
    channel2StartTime = Date.now()
    console.log(channel2StartTime)
    channel2.forEach(el => {
        setTimeout(playSounds, el.time, el.code)
    }
    )
    console.log('222')
}

function startRecording3() {
    channel3StartTime = Date.now()
    console.log(channel3StartTime)
    channel3.forEach(el => {
        setTimeout(playSounds, el.time, el.code)
    })
}
function startRecording4() {
    channel4StartTime = Date.now()
    console.log(channel4StartTime)
    channel4.forEach(el => {
        setTimeout(playSounds, el.time, el.code)
    })


}
let amountOfCode = 0;
function playSounds(code) {
    if (code === 'KeyA') {
        clap.currentTime = 0
        clap.play()
        amountOfCode++;
        console.log(amountOfCode)
        aBtn.style.backgroundColor = "green"
    }

    else if (code === 'KeyS') {
        boom.currentTime = 0
        boom.play()

    }

    else if (code === 'KeyD') {
        hihat.currentTime = 0
        hihat.play()
    }
    else if (code === 'KeyF') {
        openhat.currentTime = 0
        openhat.play()
    }
    else if (code === 'KeyG') {
        ride.currentTime = 0
        ride.play()
    }
    else if (code === 'KeyH') {
        snare.currentTime = 0
        snare.play()
    }
    else if (code === 'KeyJ') {
        tink.currentTime = 0
        tink.play()
    }
    else if (code === 'KeyK') {
        tom.currentTime = 0
        tom.play()
    }

}

function recording1(e) {
    playSounds(e.code)
    const time = Date.now() - channel1StartTime
    channel1.push({
        code: e.code,
        time: time
    })
    console.log(channel1)
}
function recording2(e) {
    playSounds(e.code)
    const time = Date.now() - channel2StartTime
    channel2.push({
        code: e.code,
        time: time
    })
    console.log(channel2)
}

function recording3(e) {
    playSounds(e.code)
    const time = Date.now() - channel3StartTime
    channel3.push({
        code: e.code,
        time: time
    })
    console.log(channel3)
}

function recording4(e) {
    playSounds(e.code)
    const time = Date.now() - channel4StartTime
    channel4.push({
        code: e.code,
        time: time
    })
    console.log(channel4)
}
document.body.addEventListener('keypress', recording1)
document.body.addEventListener('keypress', recording2)
document.body.addEventListener('keypress', recording3)
document.body.addEventListener('keypress', recording4)

btnPlaying.addEventListener('click', function playingAll(e) {
    //playSounds(e.code)
    startRecording1()
    startRecording2()
    startRecording3()
    startRecording4()

})




