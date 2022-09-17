window.onload=inicio;
window.onkeydown=teclado;
window.onkeyup=soltarCursores;
window.onresize=tomarMedidas;
var nave;
var x;
var y =0;
var anchoNavegador,altoNavegador;
var anchoNave,altoNave;
var crono;
var pulsando=false;
var sonido;

function inicio(){
	nave=document.querySelector("#nave");
	tomarMedidas();
	x=(anchoNavegador/2)-(anchoNave/2)
	ubicarNave();
	crono=setInterval(atraccion,375);
	sonido=document.querySelector("audio");
}

function soltarCursores(){
	pulsando=false;
}

function atraccion(){
	if(y>0 && pulsando==false){
		y-=3;
		ubicarNave();
	}
}

function tomarMedidas(){
	anchoNavegador=window.innerWidth;
	anchoNave=nave.offsetWidth;
	altoNavegador=window.innerHeight;
	altoNave=nave.offsetHeight;

	if(y+altoNave+30>altoNavegador){
		y=altoNavegador-altoNave-30;
		ubicarNave();
	}

	if(x+anchoNave>anchoNavegador){
		x=anchoNavegador-anchoNave;
		ubicarNave();
	}
}

function ubicarNave(){
	nave.style.left=`${x}px`;
	nave.style.bottom=`${y}px`;
}

function teclado(e){
	let tecla=e.key;
	pulsando=true;
	if (tecla=="ArrowUp"){
		if(altoNavegador-altoNave-30>y){
		y+=10;
		ubicarNave();
	}
}
	if (tecla=="ArrowDown"){
		if(y>0){
			y-=10;
			ubicarNave();
		}
	}

	if(tecla=="ArrowRight" && y>0){
		x+=10;
		if(x>anchoNavegador-15){
			x=-anchoNave+15;
		}
		ubicarNave();
	}

	if(tecla=="ArrowLeft" && y>0){
		x-=10;
		if(x<-anchoNave+15){
			x=anchoNavegador-15;
		}
		ubicarNave();
	}
}