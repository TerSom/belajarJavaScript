function addName(firstname, lastname) {
    console.log(firstname, lastname)
}

// cara pertama new funciton
const sum1 = new Function("x","y", "console.log(x+y)")

// cara ke dua standar function
function sum2(x,y) {
    console.log(x+y)
}

// cara ke tiga arrow funciton

const sum3 = (x,y) => {
    console.log(x+y)
}

function randomize(){
    const randomNumber =(Math.floor(Math.random() * 1000))
    if(randomNumber > 200) {
        console.log("wow angkanya lebih dari 200", randomNumber)
    } else {
        console.log(randomNumber)
    }
}

randomize()

sum1(1,5)
sum2(4,6)
sum3(3,5)