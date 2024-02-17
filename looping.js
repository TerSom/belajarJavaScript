for(let i = 1; i <= 5; i++) {
    console.log("data ke -", i)
}

let x = 1
while(x <= 5){
    console.log("data x ke - ", x)
    x++
}

let y = 1
do {
    console.log("data y ke -", y)
    y++
} while (y <= 5)

const pacarSaya = ["umay","umaygg","umayss","umayaa",]

for(let pacar of pacarSaya) {
    console.log(pacar)
}

for(let pacar in pacarSaya) {
    console.log(pacar)
}

pacarSaya.forEach((pacar, index)=> {
    console.log(pacar, index + 1)
});

//forEach dan map sama saja memanggilkan value array