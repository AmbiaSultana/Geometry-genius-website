//calculate Triangle
function calculateTriangle(){
    const baseTri = getInputValue('Triangle-b')
    const heightTri = getInputValue('Triangle-h')

    const areaTri = 0.5 * baseTri * heightTri
    const areaTri1 = areaTri.toFixed(2)
    innerText('span-tri', areaTri1)
}
    

function getInputValue(TriangleInput){
    const TriInput = document.getElementById(TriangleInput)
    const triValue = TriInput.value
    const triNumber = parseFloat(triValue)
    return triNumber
    
}

function innerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area
}

