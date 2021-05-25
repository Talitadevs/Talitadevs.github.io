// --------------------------------------- Acessibilidade ---------------------------------------

function fonte(e){
	var elemento = $(".acessibilidade");
	var fonte = elemento.css('font-size');
	if (e == 'a') {
		elemento.css("fontSize", parseInt(fonte) + 4);
	} else if('d'){
		elemento.css("fontSize", parseInt(fonte) - 4);
	}
}
// --------------------------------------- Valida CPF ---------------------------------------
function valida() {
    //elemento js que retorna falso se o input corresponde ao seu pattern
    if (document.cad.cpf.validity.patternMismatch) {
        document.getElementById("cpfCpnj").innerHTML = "<font color='yellow';>CPF inválido.</font>";
        console.log("aqui");
        alert("O CPF está incorreto");
    } else {
        document.getElementById("cpfCpnj").innerHTML = "<font color='gray'; text-shadow: '20px 20px white';>CPF válido"
        console.log("aqui");
    }
    return false;
}

// --------------------------------------- Valida CNPJ ---------------------------------------
function valida() {
    //elemento js que retorna falso se o input corresponde ao seu pattern
    if (document.cad.cpf.validity.patternMismatch) {
        document.getElementById("cpfCpnj").innerHTML = "<font color='yellow';>CPF/CNPJ inválido.</font>";
        console.log("aqui");
        alert("O CPF/CNPJ está incorreto");
    } else {
        document.getElementById("cpfCpnj").innerHTML = "<font color='gray'; text-shadow: '20px 20px white';>CPF/CNPJ válido"
        console.log("aqui");
    }
    return false;
}
// --------------------------------------- Não permitir número no campo nome ---------------------------------------

function valida_nome(){
    if(!isNaN(nome.value)){
        alert("Nome inválido!");
    }    
}   
// --------------------------------------- Mostrar seta de topo a 400px dele --------------------------------------

    $(function () {
        $(window).scroll(() => altPagina()); 
        $("#seta").toggle();
        altPagina();
    });
    
    function altPagina() {
        if ($(window).scrollTop() > 400) {
            $("#seta").fadeIn(500);
        } else{
            $("#seta").fadeOut(500)
        }   
    }      

// --------------------------------------- Alert ao clicar em enviar ---------------------------------------
       
    // function enviar(){
    //     alert("Cadastro recebido com sucesso! Em breve entraremos em contato.");
    // }
    
// valida se todos os campos estão preenchidos antes de exibir a mensagem que a atualização está registrada
$(document).ready(function () {
    $(function () {
        $("#myForm").submit(function () {
            var vazios = $("input[type=number]").filter(function () {
                return !this.value;
            }).get();

            if (vazios.length || !isNaN(nome.value)) {
                $(vazios).addClass('vazio');
                alert("Preencha o campo corretamente.");
                $("#nome").css("background", "red")
                return false;
            } else {

                alert("Cadastro recebido, " + nome.value + "! \nEm breve entraremos em contato");
            
            }
        });
    });
});


  //---------------- Alerta de envio com sucesso -----------------

  $("button").click(function () {
    if ($("#categoriaInput").val() == "" || $("#nomeInput").val() == "" || $("#autorInput").val() == "" || $("#publicacaoInput").val() == "" || $("#edicaoInput").val() == "" || $("#valorInput").val() == "") {
        alert('campo vazio');
    } else {
        alert("Cadastro registrado com sucesso!");
    };
});

   
// --------------------------------------- focus quando clicado e blur deselecionado ---------------------------------------
$(document).ready(function () {
    $("input").focus(function () {
        $(this).css('background-color', 'rgb(250, 249, 195)');
        $("input").blur(function () {
            $(this).css('background-color', 'rgb(255,255,255)');
        });
    });
});



