function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

Array.prototype.has = function(item)

{
    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();


for(i in this){
    if( this[i] == item ){
        document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

    }else{
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;

    }


}
});

}

luf = window.document.getElementsByName('uf')
function valida_uf(luf)

{

var ufs = ['AC','AL','AM','AP','BA','CE','ES','GO',
'MA','MG','MS','MT','PA','PB','PE','PI',
'PR','RJ','RN','RO','RR','RS','SC','SE',
'SP','TO']

return ufs.has(luf)

}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}




