let options = ['stone', 'paper', 'scissor']
let userScore = 0
let computerScore = 0
if (localStorage.getItem('userScore') !== null) {
    userScore = localStorage.getItem('userScore')
    document.querySelector('.uscore').innerHTML = userScore
}
if (localStorage.getItem('computerScore') !== null) {
    computerScore = localStorage.getItem('computerScore')
    document.querySelector('.cscore').innerHTML = computerScore
}


options.forEach((option) => {
    document.querySelector('.' + option).addEventListener('click', () => {
        let userChoice = option
        let computerChoice = generateRandom()
        let winner = checkWinner(userChoice, computerChoice);
        document.querySelector('.play-again').innerHTML = 'PLAY AGAIN'
        if (winner === 0) {
            userScore++
            localStorage.setItem('userScore', userScore)
            document.querySelector('.mid-section h2').innerHTML = 'YOU WIN'
            document.querySelector('.mid-section h3').style.display = 'block'
            document.querySelector('.outer-circle-2').style.visibility = 'hidden'
            document.querySelector('.outer-circle-1').style.visibility = 'visible'
            document.querySelector('.computer-picked').style.visibility = 'visible'
            document.querySelector('.go-next').style.display = 'flex'
        }
        else if (winner === 1) {
            computerScore++
            localStorage.setItem('computerScore', computerScore)
            document.querySelector('.mid-section h2').innerHTML = 'YOU LOST'
            document.querySelector('.mid-section h3').style.display = 'block'
            document.querySelector('.outer-circle-1').style.visibility = 'hidden'
            document.querySelector('.outer-circle-2').style.visibility = 'visible'
            document.querySelector('.you-picked').style.visibility = 'visible'
            document.querySelector('.go-next').style.display = 'none'
        }
        else {
            document.querySelector('.play-again').innerHTML = 'REPLAY'
            document.querySelector('.mid-section h2').innerHTML = 'TIE UP'
            document.querySelector('.mid-section h3').style.display = 'none'
            document.querySelector('.outer-circle-1').style.visibility = 'hidden'
            document.querySelector('.you-picked').style.visibility = 'visible'
            document.querySelector('.outer-circle-2').style.visibility = 'hidden'
            document.querySelector('.computer-picked').style.visibility = 'visible'
            document.querySelector('.go-next').style.display = 'none'
        }
        document.querySelector('.you-picked img').setAttribute('src', 'img/' + userChoice + '.svg')
        document.querySelector('.you-picked').setAttribute('class', userChoice + ' margin0-auto you-picked')
        document.querySelector('.computer-picked img').setAttribute('src', 'img/' + computerChoice + '.svg')
        document.querySelector('.computer-picked').setAttribute('class', computerChoice + ' margin0-auto computer-picked')
        document.querySelector('.cscore').innerHTML = computerScore
        document.querySelector('.uscore').innerHTML = userScore
        document.querySelector('.options').style.display = 'none'
        document.querySelector('.result').style.display = 'grid'

    })
})

document.querySelector('.play-again').addEventListener('click', () => {
    document.querySelector('.result').style.display = 'none'
    document.querySelector('.options').style.display = 'block'
    document.querySelector('.go-next').style.display = 'none'
})

document.querySelector('.show-rules').addEventListener('click', () => {
    document.querySelector('.rules-section').style.display = 'block'
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.rules-section').style.display = 'none'
})

const generateRandom = () => {
    let r = Math.floor(Math.random() * 3)
    return options[r]
}

// 0 --> user win
// 1 -->computer win
// 2 --> draw

const checkWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 2
    }

    if (userChoice === 'stone') {
        if (computerChoice === 'paper') {
            return 1
        }
        else {
            return 0
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissor') {
            return 1
        }
        else {
            return 0
        }
    }

    if (userChoice === 'scissor') {
        if (computerChoice === 'stone') {
            return 1
        }
        else {
            return 0
        }
    }
}