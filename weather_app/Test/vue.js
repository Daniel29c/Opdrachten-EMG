function bereken() {
    var a = document.getElementById("getal1").value;
    var b = document.getElementById("getal2").value;
    var c = Number(a) + Number(b);
    document.getElementById("antwoord").innerHTML = c;
}
// function addNumbers(elem1, elem2) {
//     var a = document.getElementById(elem1).value;
//     var b = document.getElementById(elem2).value;
//     var c = Number(a) + Number(b);
//     document.getElementById("testResult").innerHTML = c;
//   }

const tijd = new Date();
const month = ["january", "February", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
let maand = month[tijd.getMonth()];

const day = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]
let naamdag = day[[tijd.getDay()]]

const app = Vue.createApp({
    data() {
        return {
            // data-item creeëren
            logo: "assets/schoollogo.png",
            begroet_tekst: "Hello world!",
            maand: maand,
            uur: tijd.getHours(),
            jaar: tijd.getFullYear(),
            naamdag: naamdag,
            dag: tijd.getDate(),
            
        }
    }
})

