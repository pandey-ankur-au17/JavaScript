let myData = document.getElementById("mainBoxankur");
let myBtn = document.getElementById("mybtn")

function printRes(value) {

    console.log(value);
    let myH1 = document.createElement("h1");
    myH1.innerText = "Here is Your Latitude : "

    let mySpan1 = document.createElement("span");
    mySpan1.id = "Latitude";
    mySpan1.innerText = value.coords.latitude;

    let myH2 = document.createElement("h1");
    myH2.innerText = "Here is Your Longitude : "

    let mySpan2 = document.createElement("span");
    mySpan2.id = "Longitude";
    mySpan2.innerText = value.coords.longitude;

    let myDiv = document.createElement("div");
    myDiv.id = "locationBox";

    let myA = document.createElement("a");
    myA.setAttribute("target", "_blank")
    myA.setAttribute("href", `https://www.google.com/maps/@${value.coords.latitude},${value.coords.longitude},15.12z`)
    myA.innerText = "See Your Location On Google"

    myH1.appendChild(mySpan1);
    myH2.appendChild(mySpan2);
    myDiv.appendChild(myA);
    myData.appendChild(myH1);
    myData.appendChild(myH2);
    myData.appendChild(myDiv);


}

function printErr(err) {
    console.log(err.message);
}

myBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(printRes, printErr)
})