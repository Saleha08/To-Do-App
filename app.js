let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
     let item=document.createElement("li");
     let delbtn=document.createElement("button");
     delbtn.innerText="delete";
     delbtn.classList.add("delete");
     item.innerText=inp.value;
     item.appendChild(delbtn);
     ul.appendChild(item);
     inp.value=" ";
});

ul.addEventListener("click",function(event){
     if (event.target.nodeName == "BUTTON"){
          let listItem=event.target.parentElement;
          listItem.remove();
     }
   
});
