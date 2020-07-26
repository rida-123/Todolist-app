var a=document.getElementById("head");
var dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var d=new Date();
var days=d.getDay();
var nameDays=dayArr[days];

var date=d.getDate();

var monthArr=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
var d=new Date();
var month=d.getMonth();
var nameMonth=monthArr[month];

a.innerHTML=nameDays+","+" "+nameMonth+" "+date;



const inputs = document.querySelectorAll('.form-control input');
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
		.join('');
});

var list=document.getElementById("list");
function additem(){
    var todoitem=document.getElementById("todo-item");
    if(todoitem.value==""){
        alert("input field cannot be empty");
    }
    else{

    
    var input=document.createElement("li");
    
    input.setAttribute("class","pera")
    var text=document.createTextNode(todoitem.value);
    input.appendChild(text);

    var btn=document.createElement('button');
    var textNo=document.createTextNode('DELETE');
    
  
 
    btn.setAttribute("class","deletebtn");
    
    btn.setAttribute("onClick","deletebtn(this);")
    btn.appendChild(textNo)
    input.appendChild(btn);


    var btn1=document.createElement('button');
    var textNod=document.createTextNode('EDIT');
 
    btn1.setAttribute("class","editbtn");
    
    btn1.setAttribute("onClick","editbtn(this);")
    btn1.appendChild(textNod)
    input.appendChild(btn1);


    
    list.appendChild(input);
    }
todoitem.value="";

}

function deleteall(){
    list.innerHTML="";
}
function deletebtn(e){
    e.parentNode.remove();
}
function editbtn(e){
   var val= e.parentNode.firstChild.nodeValue;
   var editVal=prompt("Enter edit value",val);
  
   e.parentNode.firstChild.nodeValue=editVal;
}

