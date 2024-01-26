let btn=document.querySelectorAll(".btn");
let str="";
let input=document.querySelector("input")
btn.forEach((bt)=>{
  bt.addEventListener("click",(e)=>{
      if(e.target.textContent==='=')
      {
          if(str=='')
          {
          alert("Enter the number")
          }

         let st=eval(input.value);
         input.value=st;
         
      }
      else if(e.target.textContent==='AC')
      {
      input.value="";
      str="";
      
      }
      else if(e.target.textContent==='M')
      {
          str+='*10';
      }
      else {
          str+=e.target.textContent;
          input.value=str;
         
      }
      
  })
})