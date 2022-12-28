const choices = document.querySelectorAll('.choice')
const winner = document.querySelector('.winner')
const score = document.querySelector('.score')

// Create object that holds the computers choices
const computerChoices = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
}

let computerScore = 0;
let playerScore = 0;

// Loop through the choices
choices.forEach(choice => {
    // Add an event listener to each choice
    choice.addEventListener('click', (e) => {
        // Create variable currentChoice and set it to the event target id
        const playerChoice = e.target.id
        // Set computerChoice variable to the return of getComputerChoice function
        const computerChoice = getComputerChoice()
        // Set variable winner to the return chooseWinner(playerChoice, computerChoice)
        const results = chooseWinner(playerChoice, computerChoice)
        // Run winOrLose function and pass in results
        winOrLose(results)
        
    })
})

// Create getComputerChoice function
const getComputerChoice = () => {
    // Set computer choice equal to a random choice in the computerChoices object
    const computerChoice = computerChoices[Math.floor(Math.random() * Object.keys(computerChoices).length)]
    // Return computerChoice
    return computerChoice
}

// Create chooseWinner function
const chooseWinner = (playerChoice, computerChoice) => {
    if(playerChoice === 'rock' && computerChoice === 'scissors'){
        return 'Won'
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        return 'Won'
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        return 'Won'
    }else if(playerChoice === computerChoice){
        return 'Tie'
    }else{
        return 'Lose'
    }
}

const winOrLose = (results) => {
    if(results === 'Won'){
        // Clear the winner div
        winner.innerHTML = ''
        // Remove youWin class
        winner.classList.remove('youWin')
        // Remove youLose class
        winner.classList.remove('youLose')
        // Create an h1 element
        const h1 = document.createElement('h1')
        // Add a class of youWin to the winner div
        winner.classList.add('youWin')
        // Set innerText of h1
        h1.innerHTML = `
            <h1>You ${results}</h1>
        `
        // Append h1 to winner
        winner.appendChild(h1)

    }else if(results === 'Lose'){
        // Clear the winner div
        winner.innerHTML = ''
        // Remove youWin class
        winner.classList.remove('youWin')
        // Remove youLose class
        winner.classList.remove('youLose')
        // Create an h1 element
        const h1 = document.createElement('h1')
        // Add a class of youLose to the winner div
        winner.classList.add('youLose')
        // Set the h1 innerText to results
        h1.innerHTML = `
            <h1>You ${results}</h1>
        `
        // Append h1 to winner
        winner.appendChild(h1)

        playerScore++
        // Grab the h1 element with the class of player
        document.querySelector('.player').innerHTML = `Player: ${playerScore}`
    }else{
         // Clear the winner div
         winner.innerHTML = ''
         // Remove youWin class
         winner.classList.remove('youWin')
         // Remove youLose class
         winner.classList.remove('youLose')

         // Create an h1 element
        const h1 = document.createElement('h1')
        // Set the h1 innerText to results
        h1.innerHTML = `
            <h1>You ${results}</h1>
        `
        // Append h1 to winner
        winner.appendChild(h1)
        // Increment computerScore by 1
        computerScore++
        // Grab the h1 element with the class of computer
        document.querySelector('.computer').innerHTML = `Computer: ${computerScore}`
    }
}









