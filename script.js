//console.log("hello");
//var name=prompt("what is your name");
//alert("hello" +name "you can calculate interest here");

var output=document.querySelector("#output");
var principle=document.querySelector("#principle");
var rate=document.querySelector("#rate");
var time=document.querySelector("#time");
var count=document.querySelector("#count");
var calculate=document.querySelector(".calculate");
calculate.addEventListener('click',function calculate (){
    var SI=(principle.value*rate.value*time.value)/100;
    console.log(SI);
    output.innerText="Your simple interest is:"+SI;
 }
)

var output1=document.querySelector("#output1");
var p1=document.querySelector("#p1");
var r1=document.querySelector("#r1");
var t1=document.querySelector("#t1");
var c1=document.querySelector("#c1");
var calculate=document.querySelector(".calculate1");

calculate.addEventListener('click' , function calculate(){
    var x=(Math.pow((1+r1.value/c1.value),(c1.value*t1.value)));
    var CI=(p1.value*x);
    //console.log(CI);
    output1.innerText="Your compound interest is:"+CI;
}
);


