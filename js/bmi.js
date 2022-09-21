const getbmi1 = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point);

const element = document.querySelector(".title");
const cal = document.querySelector("#calc");
const res = document.querySelector("#reset")
let namE = document.querySelector("#name");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
//console.log(element)
//console.log(cal)
console.log(namE)
console.log(height)
console.log(weight)




cal.addEventListener("click", () => {
    let bmI = document.querySelector("#comment .bmi");
    console.log(bmI);

    //let namE = document.querySelector("#name").value;
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    if (height == "" || weight == "") {
        alert("輸入不能為空");
        return;
    }

    let bmi = getbmi1(height, weight);
    if (isNaN(bmi)) {
        alert("請輸入數值");
        return;
    }
    console.log(bmi)
    bmI.innerHTML = bmi;

});

res.addEventListener("click", () => {
    let bmI = document.querySelector("#comment .bmi");
    if (bmI !== "") {
        bmI.innerHTML = ""
    }

})