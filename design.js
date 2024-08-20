var equation=" ";
var divValue=document.getElementById("input_box")
function onef(){
    var value1=document.getElementById("one").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function twof(){
    var value1=document.getElementById("two").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function thrf(){
    var value1=document.getElementById("thr").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function fouf(){
    var value1=document.getElementById("fou").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function fivf(){
    var value1=document.getElementById("fiv").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function sixf(){
    var value1=document.getElementById("six").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function sevf(){
    var value1=document.getElementById("sev").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function eigf(){
    var value1=document.getElementById("eig").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function ninf(){
    var value1=document.getElementById("nin").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function zerf(){
    var value1=document.getElementById("zer").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function dotf(){
    var value1=document.getElementById("dot").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function addf(){
    var value1=document.getElementById("add").value;
   
    equation+=value1;
    divValue.innerHTML=equation;
}
function subf(){
    var value1=document.getElementById("sub").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function mulf(){
    var value1=document.getElementById("mul").value;
    equation+=value1;
    divValue.innerHTML=equation;
}
function divf(){
    var value1=document.getElementById("div").value;
    equation+=value1;
    divValue.innerHTML=equation;
}



function equalf(){
    var result;
    var equation2=equation.split(" ");
    console.log(equation2+"hello"+equation2.length)
    for(let i=0;i<equation2.length;i++){

        if(equation2[i]=="+"){
            result=parseInt(equation2[i-1])+parseInt(equation2[i+1]);
            equation2[i+1]=result;
        }
        else if(equation2[i]=="-"){
            result=parseInt(equation2[i-1])-parseInt(equation2[i+1]);
            equation2[i+1]=result;
        }
        else if(equation2[i]=="*"){
            result=parseInt(equation2[i-1])*parseInt(equation2[i+1]);
            equation2[i+1]=result;
        }
        else if(equation2[i]=="-"){
            result=parseInt(equation2[i-1])/parseInt(equation2[i+1]);
            equation2[i+1]=result;
        }
        divValue.innerHTML=result;
        equation=result;
    }
}