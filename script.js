let key = document.querySelector(".key");
let keyCode = document.querySelector(".KeyCode")
let audio = document.querySelector("audio");
let arr = [];

key.addEventListener("keydown" , (event) =>{
   key.innerHTML = `<p>You have Pressed <span class = "green">${event.key}</span></p>`;
   console.log(event.key)
   arr.push(event.key);
   let green = document.querySelector(".green");
   green.style.color = "green"
   audio.currentTime = "0.05";
   audio.play();
   green.style.fontSize = "3rem"
   keyCode.style.fontSize = "3rem"
   keyCode.style.color = "green";
   keyCode.innerText = event.keyCode;
})

window.onload = ("load" , () =>{
   alert("Click on the keyBoard Key container, to Enable the keypress functionality")
})

key.addEventListener("click", () =>{
   alert("Now enjoy the keypress event by pressing each key on your keyboard! and u'll be surprised!!  ")
});

console.log(arr);

let history = document.querySelector(".history");

history.addEventListener("click",() =>{
  let ans = ""
   arr.forEach((value) =>{
      ans = ans +" " + value;
   })

   history.innerText = ans;
})