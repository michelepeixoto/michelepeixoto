function showEmail(){
  document.getElementById("email").style.display = "inherit";
}

function hideEmail(){
  document.getElementById("email").style.display = "none";
}

/* NOT IN USE ----------------------------------

// Window width display
window.addEventListener('load', function(event){
  var width_tool = document.createElement("DIV");
  width_tool.style.width = "100%";
  width_tool.style.position = "fixed";
  width_tool.style.top = "0";
  width_tool.id = "window-size";
  var text = document.createTextNode("Window width: " + window.innerWidth + ", height: " + window.innerHeight);
  width_tool.appendChild(text);
  document.body.appendChild(width_tool);
});

window.addEventListener('resize', function(event){
  var div = document.getElementById("window-size");
  div.innerHTML = "Window width: " + window.innerWidth + ", height: " + window.innerHeight;
});
// Window width display


console.log("loaded"); 

var current = "", item = ""; 

function addWindow(subject){
  item = subject;
  var div = document.createElement("div");
  div.id = subject;
  div.className = "window";
  div.innerHTML = '<img src="images/window.png" onload="addButtons(1)">';
  document.getElementById("desktop").appendChild(div);
  current = document.getElementById(subject);
}

function addButtons(open){ 
  if (open == 1){ 
    current.style.marginTop = "20%"; 
    current.innerHTML = '<img src="images/window.png">'; 
  }
  addB("min", item); 
  addB("max", item);
  addB("cls", item);  
  console.log("added buttons for "+item);  
}  

function addB(b, subject){ 
  current = document.getElementById(subject);
  current.innerHTML += '<div id="'+subject+b+'" class="'+b+'" onclick="'+b+'('+subject+')"></div>';  
  console.log("added "+subject+b);  
} 

function min(subject){ 
  current = document.getElementById(subject);
  current.style.marginTop = "30%";
  current.innerHTML = '<img src="images/min.png">';  
  console.log(min); 
  addButtons(0); 
}  

function max(subject){ 
  console.log(max); 
  addButtons(1); 
} 

function cls(subject){ 
  current = document.getElementById(subject);
  current.style.display = "none";  
  console.log(cls);  
}  

function getMsg(){  
  var inp = document.querySelector(".tbox").value; 
  console.log(inp); 
  return inp;  
} 

function showMsg(){  
  var msg = getMsg();  
  msg = msg.replace(/\r\n|\r|\n/g, "<br />"); 
  $(".comm").html('<div class="msg"><p>'+msg+'</p></div>'); 
}  

function del(place){ 
  $(place).val(""); 
  console.log("deleted");  
} 

---------------------------------- */
