function abrirmenu(){
    let BarramenuAberto = document.getElementById ('Barra_menu')
    if (BarramenuAberto.style.width == "0px"){
        BarramenuAberto.style.width = "300px"
    }else{
        BarramenuAberto.style.width = "0px"
    }
}

