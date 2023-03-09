const calcButton = document.querySelector("#calcButton")
const heightInput = document.querySelector("#height")
const baseInput = document.querySelector("#base")
const areaResult = document.querySelector("#area")
calcButton.addEventListener("click", ()=>{
    const base = Number (baseInput.value)
    const height = Number (heightInput.value)
    let area = calcArea(base, height)
    result.style.display="block"
    areaResult.value=area
    deleteInputs()
})
function calcArea(base, height) {
    let area = (height*base)/2
    return area
}
function deleteInputs(){
    baseInput.value=""
    heightInput.value=""
}