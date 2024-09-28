
// calculate Parallelogram
function calculateAreaParallelogram(){
    const parallelogramHeight = inputParallelogram('Para-b')
    const parallelogramBase = inputParallelogram('Para-h')

    const parallelogramArea = parallelogramBase * parallelogramHeight;
    const parallelogramAreaFixed = parallelogramArea.toFixed(2)

    innerText('span-para', parallelogramAreaFixed)
}

function inputParallelogram(valueParallelogram){
    const parallelogramInput = document.getElementById(valueParallelogram)
    const parallelogramValue = parallelogramInput.value
    const parallelogramNumber = parseFloat(parallelogramValue)
    return parallelogramNumber;
}

function getTextParallelogram(elementParallelogram, text){
    const element = document.getElementById(elementParallelogram)
    element.innerText = text
}
