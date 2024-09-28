
// calculate Rectangle
function rectangleArea(){
    const widthRectangle = getRectInput('rectangle-w')
    const lengthRectangle = getRectInput('rectangle-l')

    const areaRectangle = widthRectangle * lengthRectangle
    const areaRectangleFixed = areaRectangle.toFixed(2)
    innerText('span-rect', areaRectangleFixed)
}


function getRectInput(RectangleInput){
    const rectInput = document.getElementById(RectangleInput)
    const rectValue = rectInput.value
    const rectNumber = parseFloat(rectValue)
    return rectNumber;
}


function rectInnerText(rectangleId, text){
    const elementRect = document.getElementById(rectangleId)
    elementRect.innerText = text
}
