const cont = document.getElementById("container")
//const gridItem = document.querySelector(".grid-item");
const input = document.getElementById("input")
let generateGrid=(n)=>{
    let pixel=400/n;
    let pixelPercent=(pixel/400)*100
    let percentString="";
    for(let i=0;i<n;i++)
    {
        percentString=percentString+pixelPercent+"%"+" "
    }
    console.log(percentString)
    cont.style.cssText='grid-template-columns:'+percentString;
    for(let i=0;i<n;i++)
    {
    for(let j=0;j<n;j++)
    {
    let node=document.createElement("div")
    //console.log(node)
    node.classList.add("grid-item")
    node.style.height=pixelPercent;
    node.style.width=pixelPercent;
    node.setAttribute("id",i+""+j)
   
    cont.appendChild(node)
    let gridItem = document.getElementById(i+""+j)

    gridItem.addEventListener("mouseover",()=>{
        gridItem.style.backgroundColor="#00FF00"
       
    })
    }
    }
}
bt1.addEventListener("click",()=>{
    while(cont.firstChild)
     {
        cont.removeChild(cont.firstChild)
     }
     if(input.value>100)
     input.value=100;
    generateGrid(input.value);
    
})


