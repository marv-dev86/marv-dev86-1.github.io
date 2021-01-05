$(function(){
    abrirOfertas()
    abrirHombres()
    abrirMujeres()
    cerrarTodo()

})
// ofertas 
function abrirOfertas(){
    $('.contenido-ofertas').hide()
    $('#ofertas').hover(function(){
        $('.contenido-hombres').hide()
        $('.contenido-mujeres').hide()
        $('.contenido-ofertas').slideDown(800)
    })

    cerrarOfertas()
    
}

function cerrarOfertas(){
    $('.contenido-ofertas').mouseenter(function(){
       $('this').show()
    })

    $('.contenido-ofertas').mouseleave(function(){
        $('.contenido-ofertas').slideUp()
        // alert('quiero funcionar')
     })

    
}

// hombres

function abrirHombres(){
    $('.contenido-hombres').hide()
    $('#hombres').hover(function(){
        $('.contenido-ofertas').hide()
        $('.contenido-mujeres').hide()
        $('.contenido-hombres').slideDown(800)
    })

    cerrarHombres()
    
}

function cerrarHombres(){
    $('.contenido-hombres').mouseenter(function(){
       $('this').show()
    })

    $('.contenido-hombres').mouseleave(function(){
        $('.contenido-hombres').slideUp()
        // alert('quiero funcionar')
     })

    
}

//Mujeres
function abrirMujeres(){
    $('.contenido-mujeres').hide()
    $('#mujeres').hover(function(){
        $('.contenido-ofertas').hide()
        $('.contenido-hombres').hide()
        $('.contenido-mujeres').slideDown(800)
    })

    cerrarMujeres()
    
}

function cerrarMujeres(){
    $('.contenido-mujeres').mouseenter(function(){
       $('this').show()
    })

    $('.contenido-mujeres').mouseleave(function(){
        $('.contenido-mujeres').slideUp()

        // alert('quiero funcionar')
     })

    
}

//cerrar todo

function cerrarTodo(){
    $('html').mouseleave(function(){
        $('.cerrar').slideUp()
    })
    
}

