function mostrar(){
   let x = document.getElementById("contact-1-contraseña");
   let y = document.getElementById("contact-1-confirmarcontraseña")
   if (x.type === "password") {  
   if (y.type ==="password") { 
   x.type="text";
   y.type="tex";
}
}else{
x.type="password";
y.type="password";
}
}

window.onclick = function (event){
    let x = document.getElementById("id01");
    if (event.target== x){
        x.style.display = "none";
    }else{

    }
}
function openNav() {
    document.getElementById("mymenu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mymenu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
 