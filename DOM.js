// body.append("HELLO WORLD")

// const h1 = document.createElement("h1")
// h1.textContent = "gg ini h1"

// const namaSaya = document.createElement("p")
// namaSaya.innerHTML = "Terry somay"

// const namaKamu = document.createElement("b")
// namaKamu.innerText = "Terry somaygg"


// body.append(h1)
// body.append(namaSaya)
// body.append(namaKamu)

document.title = "Terrysomay"
const body = document.body

const btn1 = document.getElementById("btn1")
const btn2 = document.querySelector(".btn2")

const defaultText = "klik saya 1"
btn1.textContent = defaultText

btn1.style.border = "none"
btn1.style.background = "tomato"


function clickButton(){
    btn1.style.background = "blue"
}

function ubahText(){
    btn1.textContent = "kocak gaming"
}

function oriText(){
    btn1.textContent = defaultText
}

const newText = document.createElement('p')

function munculText(){
    newText.textContent = "Rizky Chairul Tri Wahyudi"
    body.append(newText)
}
function warnaText(){
    newText.style.color = "blue"
}
