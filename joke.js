let j=[
`1. What do you call a boomerang that won’t come back?
A stick.`,

`2. What does a cloud wear under his raincoat?
Thunderwear.`,

`3. Two pickles fell out of a jar onto the floor. What did one say to the other?
Dill with it.`,

`4. What time is it when the clock strikes 13?
Time to get a new clock.`,

`5. How does a cucumber become a pickle?
It goes through a jarring experience.`,

 ` 6. What did one toilet say to the other?
You look a bit flushed.`,

`7. What do you think of that new diner on the moon?
Food was good, but there really wasn’t much atmosphere.`,

`8. Why did the dinosaur cross the road?
Because the chicken wasn’t born yet.`,

`9. Why can’t Elsa from Frozen have a balloon?
Because she will "let it go, let it go."`,

`10. What musical instrument is found in the bathroom?
A tuba toothpaste.`
]

let result= j[Math.floor(Math.random()*j.length)]
document.getElementById('i1').value= result;
window.onload=function x(){
  y1()
}
function y1(){
  let t=1
  setInterval(()=>{
    document.getElementById('ww').innerText = t;
    t++;
    if(t> 15) location.reload();
  }, 1000)
}
console.log(y1)