//console.log("hello");
//var name=prompt("what is your name");
//alert("hello" +name "you can calculate interest here");

var output=document.querySelector("#output");
var principle=document.querySelector("#principle");
var rate=document.querySelector("#rate");
var time=document.querySelector("#time");
console.log(principle);
console.log(output);
console.log(rate);
console.log(time);
var calculate=document.querySelector(".calculate");
calculate.addEventListener('click',function calculate (){
    var SI=(principle.value*rate.value*time.value)/100;
    console.log(SI);
    output.innerText="Your simple interest is:"+SI;
 }
)

