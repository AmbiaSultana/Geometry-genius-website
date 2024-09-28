
// calculate Pentagon
function calculatePentagon(){
    const pentInput = document.getElementById('pent-p')
    const pentValue = pentInput.value
    const pentNumber = parseFloat(pentValue)



    const pentInput1 = document.getElementById('pent-b')
    const pentValue1 = pentInput1.value
    const pentNumber1 = parseFloat(pentValue1)


    const pentArea = 0.5 * pentNumber * pentNumber1
    const pentArea1 = pentArea.toFixed(2)
    console.log('The area is: ', pentArea1)

    const pentFinal = document.getElementById('span-pent')
    pentFinal.innerHTML = pentArea1
}

