const calcButton = document.querySelector("#calcButton")
const heightInput = document.querySelector("#height")
const baseInput = document.querySelector("#base")
const areaResult = document.querySelector("#area")
if(calcButton){
    calcButton.addEventListener("click", ()=>{
        calculate();
    })
}
function calculate(){
    let resBase = checkInput(baseInput.value)
    let resHeight = checkInput(heightInput.value)
    if(resBase&&resHeight){
        const base = Number (baseInput.value)
        const height = Number (heightInput.value)
        let area = calcArea(base, height)
        result.style.display="block"
        areaResult.value=area+" cm²"
        deleteInputs()
    }
    else if (baseInput.value=="" || heightInput.value=="") {
        alert("Nincs adat")
    }
    else{
        alert("Hibás adattípus")
    }
}
if(baseInput && heightInput){
    baseInput.addEventListener("click", ()=>{
        result.style.display="none"
    })
    heightInput.addEventListener("click", ()=>{
        result.style.display="none"
    })
}
function calcArea(base, height) {
    let area = (height*base)/2
    return area
}
function checkInput(input){
    let res =input.match(/^[0-9]+$/)
    return res
}
function deleteInputs(){
    baseInput.value=""
    heightInput.value=""
}
