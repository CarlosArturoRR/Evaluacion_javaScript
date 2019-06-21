
var pantalla='';
var contenido_pantalla = '0';
var teclas='';
var id_tecla='';
var operador1='0';
var operador2='';
var operacion='';
var resultado_operacion=1;
var resultado=0;

var Calculadora={

  identifica_tecla: function(){

    id_tecla=event.explicitOriginalTarget.id;
    contenido_pantalla=pantalla.firstChild.data;
    document.getElementById(id_tecla).style.transform = "scale(.97, .97)";
    switch (id_tecla){
       case '0':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '1':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '2':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '3':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '4':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '5':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '6':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '7':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '8':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case '9':
         pantalla.innerHTML=Calculadora.operador(id_tecla);
         break;
       case 'on':
         pantalla.innerHTML=Calculadora.inicializa();
         break;
       case 'sign':
         pantalla.innerHTML=Calculadora.agrega_signo();
         break;
       case 'dividido':
         pantalla.innerHTML=Calculadora.division();
         break;
       case 'por':
         pantalla.innerHTML=Calculadora.multiplicacion();
         break;
       case 'menos':
         pantalla.innerHTML=Calculadora.resta();
         break;
       case 'punto':
         pantalla.innerHTML=Calculadora.agrega_punto();
         break;
       case 'igual':
         pantalla.innerHTML=Calculadora.Calcular_resultado();
         break;
       case 'mas':
         pantalla.innerHTML=Calculadora.suma();
         break;
     }

  },

   inicializa_calculadora: function(){
     pantalla= document.getElementById('display');
     teclas=document.getElementsByClassName('tecla');
     for(var i=0; i < teclas.length; i++){

       teclas[i].addEventListener('click',function(){Calculadora.identifica_tecla()});
     }

     for (let i = 0; i < teclas.length; i++) {
       teclas[i].addEventListener("mousedown", function () {
         teclas[i].style.transform = "scale(.95, .95)";
       });
       teclas[i].addEventListener("mouseup", function () {
         teclas[i].setAttribute("style", "transform:scale(1, 1)");
       });
     };

   },

   operador: function (id_tecla){

     var logitud_maxima1=8;
     var logitud_maxima2=8;
     var tiene_signo1=0;
     var tiene_signo2=0;


     if (typeof operador1!=='string'){
       operador1=operador1.toString();
     }
     if (typeof operador2!=='string'){
       operador2=operador2.toString();
     }
     tiene_signo1=operador1.indexOf('-');
     tiene_signo2=operador2.indexOf('-');

     if (tiene_signo1==-1){
       logitud_maxima1=8;
     } else {
       logitud_maxima1=9;
     }

     if (tiene_signo2==-1){
       logitud_maxima2=8;
     } else {
       logitud_maxima2=9;
     }

     contenido_pantalla=pantalla.firstChild.data;

     if ((contenido_pantalla=='0' || contenido_pantalla==' ') && id_tecla =='0') {
       id_tecla='';
       return '0';
     }

     if (id_tecla.length!==0) {
       if (operacion.length==0 && operador1.length < logitud_maxima1) {
         if (operador1=='0') {
           operador1='';
         }
         operador1= operador1 + id_tecla;
         return operador1;
       }
       else if (operacion.length!==0 && operador2.length < logitud_maxima2) {
         if (operador2=='0') {
           operador2=''
         }
         operador2= operador2 + id_tecla;
         return operador2;
       }
      else if (operacion.length==0) {
          return operador1;}
        else if (operacion.length!==0) {
          return operador2;
      }
     }
   },


   inicializa: function(){
     contenido_pantalla = '0';
     id_tecla='';
     operador1='0';
     operador2=''
     operacion='';
     resultado_operacion=1;
     resultado=0;
     return '0';
   },

   agrega_signo: function(){
     var tiene_signo1=0;
     var tiene_signo2=0;

     if (operador2.length !==0 && resultado_operacion==1){
       operador1=resultado.toString();
       operador2='';
       operacion='';
     }

      contenido_pantalla=pantalla.firstChild.data;
     if (contenido_pantalla!=='0' && contenido_pantalla!=='') {

       tiene_signo1=operador1.indexOf('-');
       tiene_signo2=operador2.indexOf('-');

       if (operacion.length==0 && operador1.length < 9 && tiene_signo1==-1 && operador2.length==0) {
         operador1= '-' + operador1;
         return operador1;
       }
       else if (operacion.length!==0 && operador2.length < 9 && tiene_signo2==-1) {
         operador2= '-' + operador2;
         return operador2;
       }


       if (tiene_signo1!==-1){
         operador1=operador1.substr(1,operador1.length-1);
         return operador1;
       }

       if (tiene_signo2!==-1){
         operador2=operador2.substr(1,operador2.length-1);
         return operador2;
       }
     } else {
       return '0';
     }
   },

   agrega_punto: function (){
     var tiene_punto1=0;
     var tiene_punto2=0;

     if (operador2.length !==0 && resultado_operacion==1){
       operador1=resultado.toString();
       operador2='';
       operacion='';
     }

     tiene_punto1=operador1.indexOf('.');
     tiene_punto2=operador2.indexOf('.');
     contenido_pantalla=pantalla.firstChild.data;

     if (operacion.length==0 && operador1.length < 7 && tiene_punto1==-1 && operador2.length==0) {
       if (contenido_pantalla=='0' || contenido_pantalla==' '){
         operador1='0'
       }
       operador1= operador1 + '.';
       return operador1;
     }
     else if (operacion.length!==0 && operador2.length < 7 && tiene_punto2==-1) {
       if (contenido_pantalla=='0' || contenido_pantalla==' ') {
         operador2='0'
       }
       operador2= operador2 + '.';
       return operador2;
     } else {

       return pantalla.firstChild.data;
     }
   },

   Calcular_resultado: function(){
     resultado=0;
     console.log(operador1);
     console.log(operador2);
     if ( operador1.length==0 || operador2.length==0){
       alert('Debe de ingresar los operadores')
       if (operador1.length !==0){
         return operador1;
        } else {
          return ' ';
      }
     }else {

       if (operacion=='/'){
         resultado=parseFloat(operador1) / parseFloat(operador2);
       } else if (operacion=='*'){
         resultado=parseFloat(operador1) * parseFloat(operador2);
       } else if (operacion=='+'){
         resultado=parseFloat(operador1) + parseFloat(operador2);
       } else if (operacion=='-'){
         resultado=parseFloat(operador1) - parseFloat(operador2);
       }


       if (resultado_operacion!==1){
         operador1=operador2;
         operador2=resultado.toString();
         operador2=operador2.substring(0,8);
         return operador2;
       } else {
         operador1=resultado.toString();
         operador1=operador1.substring(0,8);
         return operador1;
       }
      resultado_operacion=1;
     }
   },

   division: function(){
     if (operador2.length !==0 && resultado_operacion==1){
       operador1=resultado;
       operador2='';
     }
     if (operacion.length !==0 && operador2.length !==0 && operador1.length !==0){
       alert('Ya existe una operacion en proceso de pulsar el boton de igual: ' + operador1 + operacion + operador2)
     } else {

       operacion='/';
       operador2='';
       return ' ';
       resultado_operacion=0;
     }
   },

   multiplicacion: function(){
     if (operador2.length !==0 && resultado_operacion==1){
       operador1=resultado;
       operador2='';
     }
     if (operacion.length !==0 && operador2.length !==0 && operador1.length !==0){
       alert('Ya existe una operacion en proceso de pulsar el boton de igual: ' + operador1 + operacion + operador2)
     } else {

       operacion='*';
       operador2='';
       return ' ';
       resultado_operacion=0;
     }
   },

   suma: function(){
   //  if (operacion.length !==0 && operador2.length !==0 && operador1.length !==0){
      if (operador2.length !==0 && resultado_operacion==1){
        operador1=resultado;
        operador2='';
      }
      if (operacion.length !==0 && operador2.length !==0 && operador1.length !==0){
   //  if ((resultado_operacion==1) || (operador1.length !==0 && operador2.length !==0)){
       alert('Ya existe una operacion en proceso de pulsar el boton de igual: ' + operador1 + operacion + operador2)
     } else {

      operacion='+';
       operador2='';
       return ' ';
       resultado_operacion=0;
     }
   },

   resta: function (){
     if (operador2.length !==0 && resultado_operacion==1){
       operador1=resultado;
       operador2='';
     }
     if (operacion.length !==0 && operador2.length !==0 && operador1.length !==0){
       alert('Ya existe una operacion en proceso de pulsar el boton de igual: ' + operador1 + operacion + operador2)
     } else {

       operacion='-';
       operador2='';
       return ' ';
       resultado_operacion=0;
     }
   }

};

Calculadora.inicializa_calculadora()
