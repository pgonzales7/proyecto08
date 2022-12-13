
const usuario= document.getElementById("txtUser");
const msgValUsuario = document.getElementById("msgValUser");


const nombre= document.getElementById("txtNombre");
const msgValNombre = document.getElementById("msgValNombre");

const contraseña= document.getElementById("txtPwd");
const msgValPwd = document.getElementById("msgValPwd");

const contraseña2= document.getElementById("txtPwd2");
const msgValPwd2 = document.getElementById("msgValPwd2");

const email= document.getElementById("txtEmail");
const msgValEmail = document.getElementById("msgValEmail");

const tel = document.getElementById("txtTel");
const msgValTel = document.getElementById("msgValTelefono");


const btnEnviar = document.getElementById("btnEnviar");


function Validacion(){

    let vusuario = usuario.value;
    msgValUsuario.innerText ="";
    let RegExpUser = /^[a-zA-Z0-9\_\-]{4,16}$/


    let vnombre = nombre.value;
    msgValNombre.innerText ="";
    let RegExpNom = /^[A-Za-z]+([\s]?[A-Za-z])*$/;


    let vpwd = contraseña.value;
    msgValPwd.innerText ="";
    let RegExpPwd = /^[A-Z]+([a-z])*$/;

    let vpwd2 = contraseña2.value;
    msgValPwd2.innerText ="";
    let RegExpPwd2 = /^[A-Z]+([a-z])*$/;

    let vtel = tel.value;
    msgValTel.innerText ="";
    let RegExpTel = /^\([0-9]{2}\)[0-9]{3}-[0-9]{3}-[0-9]{3}$/;

    let vemail = email.value;
    msgValEmail.innerText ="";
    let RegExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




    if(!RegExpUser.test(vusuario)){
        msgValUsuario.innerText = "El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo";
    }

    if(vnombre =="" || !RegExpNom.test(vnombre)){
        msgValNombre.innerText = "Nombre inválido";  
    }

    if(!RegExpPwd.test(vpwd)){
        msgValPwd.innerText = "Debe contener una mayuscula";
    }

    if(!RegExpEmail.test(vemail)){
        msgValEmail.innerText = "Email invalido";
    }
    
    if(!RegExpTel.test(vtel)){
        msgValTel.innerText = "Ingrese codigo de pais (01)###-###-###";
    }

    if(vpwd === vpwd2){
        msgValPwd2.innerText = "Son iguales"
    }else{
        msgValPwd2.innerText = "Ambas contraseñas deben ser iguales"
    }
    

}

btnEnviar.onclick = () => Validacion();

$(".hide").click(function(){
    $(":button").hide();
    });

$("button").click(function(){
    $("p").hide();
});

$("p").mouseenter(function(){
    alert("Entraste al parrafo!");
});

$("p").hover(function(){
    alert("Entraste al parrafo");
},
function(){
    alert("Adios! Dejaste el parrafo!");

});


