$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            produtoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu email',
            mensagem: 'Por favor, deixe uma mensagem'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

     $('.lista-produtos button').click(function(){
        const destino = $('#contato');
        const produto = $(this).parent().find('h3').text();

        $('#produto-interesse').val(produto);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
     })
})