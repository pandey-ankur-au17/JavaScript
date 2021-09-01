let pushBtn = document.getElementById("PUSH_Ankur");
let popBtn = document.getElementById("POP_Pandey");
let myStack = document.getElementById("AnkurStack");
let counter = 0;

pushBtn.addEventListener("click", () => {

    let myValue = document.getElementById("ankurpandey").value;

    if (myValue.length != 0) {

        if (myStack.innerText == "Stack Empty") {
            myStack.innerText = myValue
        } else

        if (counter == 0) {
            myStack.innerText = myValue;
        } else {
            myStack.innerText += "," + myValue;
        }

    }

    counter++;
    document.getElementById("ankurpandey").value = null

})

popBtn.addEventListener("click", () => {

    let stack_my = document.getElementById("AnkurStack");

    let res = stack_my.innerText
    let resSplit = res.split(",")

    resSplit.pop()

    if (resSplit.length != 0) {
        stack_my.innerText = resSplit.join(",");
    } else {
        stack_my.innerText = "Stack Empty";
    }

});