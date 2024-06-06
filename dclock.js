var phours = document.querySelector('.hrs');
var pminutes = document.querySelector('.min');
var pseconds = document.querySelector('.sec');


const Time = ()=>{
  let hour = new Date().getHours();
 const exact=  hour > 12 ? hour - 12 : hour;
 const corr = exact < 10 ? '0' + exact : exact.toString();

 let minutes =  new Date().getMinutes();
 const mcorr = minutes < 10 ? '0' + minutes : minutes.toString();

 let seconds = new Date().getSeconds();
 const scorr = seconds < 10 ? '0' + seconds : seconds.toString();

 phours.innerHTML = corr;
 pminutes.innerHTML = mcorr;
 pseconds.innerHTML = scorr;
 console.log(exact);
  console.log(new Date().getMinutes());
  console.log(new Date().getSeconds());

}
setInterval(() => {
    Time();
}, 1000);