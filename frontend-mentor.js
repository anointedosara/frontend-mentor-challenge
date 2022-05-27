var i = 0;
let numberSelected = 0

function myBody() {
    if (numberSelected > 0) {
        document.getElementById("body").classList.remove("show")
        document.getElementById("body").classList.add("hide")
        document.getElementById("div6").classList.add("show")
        document.getElementById("div6").classList.remove("hide")
    } else {
        alert("You must click a number between 0-5");
    }


    document.querySelector(".p3").innerHTML = `You selected ${numberSelected} out of 5`
}


function myFunction() {

    const arr = document.getElementsByClassName("div4")
    for (let i = 0; i <= arr.length; i++) {
        arr[i].addEventListener("click", () => {
            numberSelected = i + 1
            arr[i].classList.add("change")
            for (let j = 0; j <= arr.length; j++) {
                if (j !== i) {
                    arr[j].classList.remove("change")
                }
            }
        })
    }

}

myFunction()