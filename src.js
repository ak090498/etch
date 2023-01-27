const cont = document.getElementById("container")

let generateGrid=(n)=>{
    cont.style.cssText='grid-template-columns:repeat(10,30px)';
    for(let i=0;i<10;i++)
    {
    for(let j=0;j<10;j++)
    {
    let node=document.createElement("div")
    //console.log(node)
    node.classList.add("grid-item")
    cont.appendChild(node)
    }
    }
}
bt1.addEventListener("click",()=>{
    generateGrid(10);

})