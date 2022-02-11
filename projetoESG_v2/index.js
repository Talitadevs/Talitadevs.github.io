$(document).ready(function () {
    // primeiro video
    $("#video").hide();
    $("#virtual").hide();
    $("#fechar").hide();

    $("#video2").hide();
    $("#presencial").hide();
    $("#fechar2").hide();

    $("#botao_video").click(function () {
        $("#video").show().scrollTop(2000);
        $("#virtual").show();
        $("#fechar").show();

    });

    // segundo video
    $("#botao_video2").click(function (e) {
        e.preventDefault();
        $("#video2").show().scrollTop(2000);
        $("#presencial").show();
        $("#fechar2").show();

    });

    $("#fechar").click(function () {
        $("#video").hide();
        $("#virtual").hide();
        $("#fechar").hide();
    })

    $("#fechar2").click(function () {
        $("#video2").hide();
        $("#presencial").hide();
        $("#fechar2").hide();
    })

    // esconde video no redimensionamento da tela
    window.addEventListener('resize', function () {
        var tam = $(window).width();
        if (tam, 769) {

            $("#video").hide()
            $("#virtual").hide()
            $("#fechar").hide()

            $("#video2").hide()
            $("#presencial").hide()
            $("#fechar2").hide()
        }
    });


});


