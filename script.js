


function addPara(){
    const vvval=document.getElementById('search').value;
    const para = document.createElement("p");
    const node = document.createTextNode(vvval);
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);
}
