var boton = document.getElementById("boton3");
boton.addEventListener("click", capturar);


class Persona{
    constructor (usuario, contraseña){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

var datosLogin = [];

nusuario= "a";
ncontraseña= "a";

function capturar(){
    //console.log("Ingresa")

    
    var user_admin="gym styles";
    var psw_admin="123";
    var usuarioCapturar = document.getElementById("recipient-name-user").value;
    //console.log(usuarioCapturar);
    var contraseñaCapturar = document.getElementById("recipient-name-password").value;
    //console.log(contraseñaCapturar);
     

    class Usuario extends Persona{
        constructor(usuario,contraseña){
            super(usuario,contraseña);
        }

    }

    if(usuarioCapturar==user_admin && contraseñaCapturar==psw_admin){
        alert("Usuario Admin");
        console.log("USuario Admin");


       nusuario= prompt("Nuevo usuario ");
       ncontraseña= parseInt(prompt("Nueva contraseña " ));
        //console.log(nusuario,ncontraseña);
        nuevoUsuario = new Usuario(nusuario, ncontraseña);
        datosLogin.push(nuevoUsuario);
        console.log(datosLogin);
       }
    
    else if(usuarioCapturar==nusuario && contraseñaCapturar==ncontraseña){

        window.location.replace("./inicio1.html")
        
        console.log("USuario Registrado");       
    }
    else{       
        alert("NO REGISTRADO");
        console.log("NO REGISTRADO");   
    }   

}

