 let boxes= document.querySelectorAll("#box");
 let reBtn= document.querySelector(".reset");
 let container= document.querySelector(".container");
 let newBtn= document.querySelector(".new-game");
 let msgContainer= document.querySelector(".msg-container");
 let msg= document.querySelector("#win");

 let turnO= true;
 const winPatterns= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
   
   const resetGame= () =>{
     turnO= true;
     enabledBtn();
     msgContainer.classList.add("msg-container");
   }

   boxes.forEach((box) => {
   box.addEventListener("click",() => {
   if(turnO === true){
   box.innerText= "⭕";
   turnO= false;
   }else{
   box.innerText= "❌";
   turnO= true;
   }
   box.disabled = true;

   checkWinner();
   }); 
  }); 

  const checkWinner= () =>{
   
   for(let patterns of winPatterns){
   let pos1Val= boxes[patterns[0]].innerText;
   let pos2Val= boxes[patterns[1]].innerText;
   let pos3Val= boxes[patterns[2]].innerText;
   if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
     showWinner(pos1Val);
   }
  }
 }
}

   const showWinner= (winner) =>{
   msg.innerText= `Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove("msg-container");
   container.style.height= "70vh";
   disabledBtn() ;
   }
  
   const disabledBtn= () =>{
   for(let square of boxes){
     square.disabled = true;
    }
   }

   const enabledBtn= () =>{
   for(let square of boxes){
     square.disabled = false;
     square.innerText = "";
    }
   }
   
   newBtn.addEventListener("click",resetGame);
   reBtn.addEventListener("click",resetGame);s
