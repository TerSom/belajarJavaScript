// tugas 1 kelar
let saldoPertama = parseInt(prompt("berapa saldo pertama kamu"))
let saldoTambahan = parseInt(prompt("berapa saldo yang ingin anda tambahkan"))
const saldoAkhir = saldoPertama + saldoTambahan
alert(`saldo pertama kamu ${saldoPertama}Rp dan anda tambahakan ${saldoTambahan}Rp jadi total seluruh saldo kamu adalah ${saldoAkhir}Rp`)


// tugas 2 kelar
const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const dayIndex = new Date().getDay();
const dayName = days[dayIndex];

alert(`Hari ini adalah hari ${dayName}`)


// tugas 3 kelar
const newText = document.createElement('p')

function munculText(){
    newText.textContent = "Rizky Chairul Tri Wahyudi"
    body.append(newText)
}
function warnaText(){
    newText.style.color = "blue"
}

//tugas 4 

// luas lingkaran
function luasLingkaran(jarijari){
    return(3.14 * jarijari * jarijari)
}
alert("mengihtung luas lingkaran")
alert(luasLingkaran(prompt("isi nilai")))

// luas segitiga
function luasSegitiga (Alas,Tinggi){
    return (1/2*Alas*Tinggi)
}
alert("menghitung luas segitiga")
alert(luasSegitiga(prompt("Alas segitiga"),prompt("Tinggi segitiga")))

// luas pesegi panjang
function persegiPajang (pajang,lebar){
    return (pajang*lebar)
}
alert("mengihutng persegi pajang")
alert(persegiPajang(prompt("Panjang persegi"),prompt("lebar persegi")))

// luas jajar genjang
function luasJajarGejang (alas,tinggi){
    return(alas*tinggi)
}
alert("menghitung luas jajar gejang")
alert(luasJajarGejang(prompt("Alas"),prompt("Tinggi")))

//tugas 5

const Nama = prompt("masukan nama kariawan")
const gaji = prompt("jumlah gaji per hari")
const hari = prompt("berapa hari dia masuk")

const jumlah = function(gaji,hari){
    return(gaji*hari)
}

alert(`${Nama} berhak mendapakan gaji senilai ${jumlah(gaji,hari)}`)

//tugas 6 

const a = [3,5,12]
let sum = 0;

for(let i = 0; i < a.length; i++){
    console.log("data a ke -", i)
}

a.forEach(n => sum += n);
console.log("Total nilai adalah 20 karena 3 + 5 + 12 =",sum)

const b = [3,5,12]
let i = 0;
while(i < b.length){
    console.log("data b ke - ", i);
    i++;
}

const hasil = b.reduce ((accumulator,value)=>{
    return accumulator + value
},0);
console.log("Total nilai adalah 20 karena 3 + 5 + 12 =",hasil);

const c = [3,5,12]
let x = 0
do {
    console.log("data b ke -", x)
    x++
} while(x < c.length)

const results = c.reduce ((accumulator,value) => {
    return accumulator + value
},0);
console.log("Total nilai adalah 20 karena 3 + 5 + 12 =", results);