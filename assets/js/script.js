$(document).ready(function(){
        let num1 = 0;
        let num2 = 0;
        let resultado = 0;

        let error1 = $("#error1").

        $("#resultado").css("color","red");
        $("#resultado").css("font-size","1.2rem");
        $("#resultado").hide();

        $("h1").click(function(){
            $(this).text("Somos el mejor pais de chile hermano");
        });

        $("#btnSumar").click(function(){

            $("#error1").text("");
            $("#error2").text("");   


            if($("#numero1").val() === ""){
                $("#error1").text("Debe agregar el primer numero");
                $("#error1").css("color","red");
                return;
            }
            if($("#numero2").val() === ""){
                $("#error2").text("Debe agregar el segundo numero");
                $("#error2").css("color","red");
                return;
            }

            num1 = parseInt($("#numero1").val());
            num2 = parseInt($("#numero1").val());
            resultado = num1 + num2; 

            $("#resultado").show();
            $("#resultado").text(resultado);
        });
});

//    let idChile = document.getElementById("idChile");
//    idChile.addEventListener("click", function(){
//        idChile.innerHTML = "No tengo porque estar de acuerdo con lo que pienso";

//    })

//    let btnSumar = document.getElementById("btnSumar");
//    btnSumar.addEventListener("click", (e) => {

//    })