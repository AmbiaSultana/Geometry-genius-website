
// calculate Rhombus
function calculateArea(){
    const b1Input = document.getElementById('b1')
    const b1Value = b1Input.value
    // console.log(typeof b1Value)
    const b1Number = parseFloat(b1Value)
    // console.log(typeof b1Number)



    const b2Input = document.getElementById('b2')
    const b2Value = b2Input.value
    const b2Number = parseFloat(b2Value)
    // console.log(b2Number)

    const area = 0.5 * b1Number * b2Number;
    const area1 = area.toFixed(2)
    console.log('The area is: ', area1)


    const final = document.getElementById('span-r')
    final.innerText = area1;
}
