//Empezamos creando las funciones para el campo de las sugerencias
window.onload = init;
function init(){
    var view  = document.getElementById('view');
    var area = document.getElementById('area');
    view.onclick = edit;
    document.onkeydown = function(e){
        e = e || event;
        //Creamos los parametros para la tecla esc
        if(e.keyCode == 27){
            cancel();
            return false;
        }
        if((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight){
            edit();
            return false;
        }
        if((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
            save();
            return false;
        }
    }
    function edit(){
        //en esta parte ocultamos el elemento div
        view.style.display = 'none'
        area.value = view.innerHTML;
        area.style.display = 'block';
        area.style.height = '80px';
        area.style.padding = '6px';

        area.style.width = '444px';
        area.focus();
    }
    function save() {
        area.style.display = 'none';
        view.innerHTML = area.value;
        view.style.display = 'block';
        view.style.letterSpacing = '1.2px';
       }

       function cancel() {
        area.style.display = 'none';
        view.style.display = 'block';
       }
}

var supercombo = 7.25;
var personalcombo = 5.75;
var infantilcombo = 3.50;
var ensalada = 1.50;
var papas = 1.25;
var piezaG = 1.75;
var piezaM = 1.50;
var piezaP = 1.25;
var bebidaG = 1.50;
var bebidaM = 1.25;
var bebidaP = 1;
var coffe = 0.50;
var postre = 1.25;


function Sumar(){

document.getElementById("super").innerHTML = supercombo;
document.getElementById("personal").innerHTML = personalcombo;
document.getElementById("infantil").innerHTML = infantilcombo;
document.getElementById("ensa").innerHTML = ensalada;
document.getElementById("papas").innerHTML = papas;
document.getElementById("PG").innerHTML = piezaG;
document.getElementById("PM").innerHTML = piezaM;
document.getElementById("PP").innerHTML = piezaP;
document.getElementById("BG").innerHTML = bebidaG;
document.getElementById("BM").innerHTML = bebidaM;
document.getElementById("BP").innerHTML = bebidaP;
document.getElementById("coffe").innerHTML = coffe;
document.getElementById("postre").innerHTML = postre;

}

(function(){
    var total = 0;
    ("#total").onclick(function(){
        var supercombo = document.getElementById("super").value;
        var personalcombo = document.getElementById("personal").value;
        var infantilcombo = document.getElementById("infantil").value;
        var ensalada = document.getElementById("ensa").value;
        var papas = document.getElementById("papas").value;
        var piezaG = document.getElementById("PG").value;
        var piezaM = document.getElementById("PM").value;
        var piezaP = document.getElementById("PP").value;
        var bebidaG = document.getElementById("BG").value;
        var bebidaM = document.getElementById("BM").value;
        var bebidaP = document.getElementById("BP").value;
        var coffe = document.getElementById("coffe").value;
        var postre = document.getElementById("postre").value;
        total = parseFloat(supercombo) + parseFloat(personalcombo) + parseFloat(infantilcombo) + parseFloat(ensalada) + parseFloat(papas) + parseFloat(piezaG) + parseFloat(piezaM) + parseFloat(piezaP) + parseFloat(bebidaG) + parseFloat(bebidaM) + parseFloat(bebidaP) + parseFloat(coffe) + parseFloat(postre);

        alert(total);
    });

});

function report(element, event){
    if((element.type == "select-one") || (element.type == "select-multiple")){
        value = "";
        for(var i = 0; i<element.Sumar.length; i++){
            if(element.options[i].selected){
                value += element.options[i].value + " ";
        }
    }
}
else if(element.type == "textarea") value = "...";
 else value = element.value;
 var msg = event + ": " + element.name + " (" + value + ")\n";
 var t = element.form.textarea;
 t.value += msg;

}

function addHandlers(f){
    //Recorrer con un lazo todos los controles del formulario
    for(var i=0; i<f.elements.length; i++){
    var e = f.elements[i];
    e.onclick = function(){report(this, 'Click');}
    e.onchange = function(){report(this, 'Change');}
    e.onfocus = function(){report(this, 'Focus');}
    e.onblur = function(){report(this, 'Blur');}
    e.onselect = function(){report(this, 'Select')}
    }
    f.btnsend.onclick = function(){
        report(this, 'Click');
        return false;
    }
}



















