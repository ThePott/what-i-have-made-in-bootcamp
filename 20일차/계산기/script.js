const main = document.querySelector("#main")
const formulaSection = document.querySelector("#formula-section")
const resultSection = document.querySelector("#result-section")

const buttonContentArray = [
    "C", "()", "%", "back",
    7, 8, 9, "÷",
    4, 5, 6, "*",
    1, 2, 3, "-",
    0, ".", "=", "+"
]

const addEventListenerToButton = (innerText, button) => {
    // if (typeof innerText === "number") {
    //     button.addEventListener("click", () => {
    //         formulaSection.innerHTML += innerText
    //     })
    //     return
    // }

    let eventListener;

    switch (innerText) {
        case "C":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case "()":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case "%":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case "back":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case "÷":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case "*":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case "-":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case "+":
            eventListener = () => {
                formulaSection.innerText += innerText
                // resultSection.innerText = ""
            }
            break
        case "=":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case ".":
            eventListener = () => {
                formulaSection.innerText = ""
                resultSection.innerText = ""
            }
            break
        case 0:
            eventListener = () => {
                const text = formulaSection.innerText
                const lastChar = text[-1]

                if (typeof lastChar === ".") {
                    return
                }

                if (typeof lastChar !== "number") {
                    formulaSection.innerText += "0."
                    return
                }

                // 앞에 아무것도 없으면 그냥 0.

                // 살아남은 건 모두 숫자
                // 000은 0으로 해야, 하지만 0.000에서는 0 더 붙이기 가능
                const splitedArray = text.split("/[\d.]+/")
                console.log("---- splitted array:", splitedArray)

                formulaSection.innerText += innerText
                // if ()
                // if (formulaSection)
                // resultSection.innerText = ""
            }
            break
        default:
            // consider they are all natural numbers
            eventListener = () => {
                formulaSection.innerHTML += innerText
            }
        // console.log(`---- WRONG INPUT HOW DID YOU DO THAT??? input: "${innerText}"`)

    }

    button.addEventListener("click", eventListener)
}

const makeButtonWith = (innerText) => {
    const button = document.createElement("button")
    button.innerText = innerText
    button.classList.add("button")
    main.appendChild(button)

    addEventListenerToButton(innerText, button)

    return 1
}

buttonContentArray.forEach((buttonContent) => { makeButtonWith(buttonContent) })

