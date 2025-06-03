const ballRow = document.getElementById("ball-row")
const rollButton = document.getElementById("roll")
const resetButton = document.getElementById("reset")

rollButton.addEventListener("click", () => {
    const numberArray = []

    while (numberArray.length < 6) {
        const randomNumber = Math.ceil(Math.random() * 45)
        if (numberArray.at(-1) !== randomNumber) {
            numberArray.push(randomNumber)
        }
    }

    numberArray.sort((a, b) => a - b)

    ballRow.innerHTML = ""
    for (const number of numberArray) {
        addBall(number)
    }
})

resetButton.addEventListener("click", () => {
    ballRow.innerHTML = ""
})

function addBall(number) {
    const div = document.createElement("div")
    div.classList.add("ball")
    div.textContent = number
    
    ballRow.appendChild(div)
}