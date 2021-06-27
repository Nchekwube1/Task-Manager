const IB = document.querySelector("#IB") as HTMLInputElement
const IS = document.querySelector("#IS") as HTMLButtonElement
// const tab = document.querySelector(".tab") as HTMLElement
// const txt = document.querySelector(".txt") as HTMLElement
const IF = document.querySelector(".IF") as HTMLFormElement
let ma = document.querySelector(".main")!

function rand(){
    let arr: string[] = ["0","1","2","3","4","5","6","7","8","9"]

    let a:string = ""

    for(let i=0; i<6;i++){
      a+= Math.floor( Math.random()  * arr.length);
    }
  return a
     
    
}

interface AT {
    cont : string,
    uid: string
}

let taskArr:AT[] = []


IF.addEventListener("submit",(e)=>{
 e.preventDefault()

 if(IB.value == ""){
     IB.classList.add("err")

     setTimeout(()=>{
         IB.classList.remove("err")
     }, 2000)
 }

 else{
    //  let item = ` <div class="tab" data-id="${rand()}">
    //       <div class="text"><h1 class="txt">${IB.value}</h1></div>
    //       <div class="but">
    //         <button type="submit" class="CO">done</button>
    //         <button type="submit" class="DE">delete</button>
    //       </div>
    //     </div>`

        taskArr.push({
           cont : IB.value,
           uid: rand()
        })

        // console.log(taskArr);
        
        ma.innerHTML = ""
  taskArr.map((er)=>{
    let {cont, uid} = er
      
 let q = ` <div class="tab" data-id="${uid}">
          <div class="text"><h1 class="txt">${cont}</h1></div>
          <div class="but">
            <button type="submit" class="CO">done</button>
            <button type="submit" class="DE">delete</button>
          </div>
        </div>`

        ma.innerHTML += q
  })

  IB.value =""
 }


})

ma.addEventListener("click",(e)=>{
let q = e.target as HTMLElement
if(q.className == "CO"){
  if(q.innerText =="DONE"){

      let s = q.parentElement?.parentElement?.children[0] as HTMLElement
      s.parentElement?.classList.add("co")
      
      s.children[0].classList.add("co")
      
       s.children[0].classList.forEach(a =>{
           if ( a =="co"){
            q.innerText = "UNDO"
           }
           
       })
  }

  else if(q.innerText == "UNDO"){

let s = q.parentElement?.parentElement?.children[0] as HTMLElement
s.parentElement?.classList.remove("co")

s.children[0].classList.remove("co")

 s.children[0].classList.forEach(a =>{
     if ( a !="co"){
      q.innerText = "DONE"
     }
     
 })
}




}



if(q.className == "DE"){
   let s = q.parentElement?.parentElement
   let id = s?.dataset.id;

 const newArr = taskArr.filter(each => each.uid !== id)
 ma.innerHTML = ""

 taskArr =newArr
   
 taskArr.map((er)=>{
    let {cont, uid} = er
      
 let q = ` <div class="tab" data-id="${uid}">
          <div class="text"><h1 class="txt">${cont}</h1></div>
          <div class="but">
            <button type="submit" class="CO">done</button>
            <button type="submit" class="DE">delete</button>
          </div>
        </div>`

        ma.innerHTML += q
  })
    
}


})

