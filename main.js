const count =()=>{
const counter=document.querySelector(".sayac");
const enter=document.querySelector("#enter");
const resetBtn=document.querySelector("#delete");
const message=document.querySelector(".msg");


setTimeout( () =>{
    if(!enter.value) message.innerHTML="<b>Please enter a word</b>";
},3000);



enter.addEventListener("input", () => {
    message.innerHTML = "";
    counter.innerHTML = enter.value.length;
  });


  resetBtn.addEventListener("click", () => {
    counter.innerHTML = 0;
    
   
  });


};

count();