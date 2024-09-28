
// calculate Ellipse
function calculateEllipse(){
    const ellipseInput = document.getElementById('Elip-a')
    const ellipseValue = ellipseInput.value;
    const ellipseNumber = parseFloat(ellipseValue)
    


    const ellipse1Input = document.getElementById('Elip-b')
    const ellipse1Value = ellipse1Input.value;
    const ellipse1Number = parseFloat(ellipse1Value)


    const EllipseArea = 3.1416 * ellipseNumber * ellipse1Number;
    const EllipseArea1 = EllipseArea.toFixed(2)
    console.log('The area is', EllipseArea1)


    const EllipseArea3 = document.getElementById('eli')
    EllipseArea3.innerHTML = EllipseArea1}