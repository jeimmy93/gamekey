$(function()
{
	 var inicia = false;
	 var score=0;
	 var decremento=10;
	 var letraPone="";
	$("#start").click(function(event)
	{
		$(this).fadeOut('fast', function() {
			setInterval(letraMuestra, 2000);
			inicia = true;
		});
	});


	//Para generar letras aleatorias...
	var letraMuestra = function()
	{
		//Se debe obtener una letra aleatoria del alfabeto y ubicarla en una posición aleatoria...
		var animacion =["bounce","flash","pulse","rubberband","shake","swing","tada","wobble","jello"];
		var aaleatorio= Math.floor(Math.random() * animacion.length);
		var aleatorio = animacion[aaleatorio];
		var numLetra = Math.floor(Math.random() * 26) + 97;
		var numLetra = Math.floor(Math.random() * 26) + 97;
		var posLetra = {
							left : Math.floor(Math.random() * (screen.width - 100)), 
							top  : Math.floor(Math.random() * (screen.height - 150))
						};
		letraPone = String.fromCharCode(numLetra).toUpperCase();
		//console.log("genera1funcion"+letraPone);
		var divLetra = "<div class = 'circulo letra_"+(letraPone)+" '" + 
							"style = \"left : "+(posLetra.left)+"px; top : "+(posLetra.top) + 
							"px; background-color: " + randomColor()+"\">" + 
							(String.fromCharCode(numLetra).toUpperCase()) + 
						"</div>";
		$("body").append(divLetra);
		//flash, wobble
		$(".letra_" + letraPone).addClass("animated " +aleatorio);
		

	};

	//Para detectar eventos de teclado...
	$(document).keypress(function(event)
	{
		//console.log(event.keyCode, txtLetra);
		if(event.keyCode >= 97 && event.keyCode <= 122 && inicia)
		{     
			
			var letraPresiona = String.fromCharCode(event.keyCode).toUpperCase();
			//Número de ocrrencias de la letra...
			var numVeces = $(".letra_" + letraPresiona).size();
			//console.log("Veces letra presionada:", numVeces);
			//console.log(letraPresiona);

	    var a =["bounceOutDown","bounceOutLeft","bounceOutUp","bounceOutRight"];
		var b = Math.floor(Math.random() * a.length);
		var c = a[b];
		// on, hace referencia a escucha, para saber cuando la animación a finalizado, luego elimina elemento con la funcion remove
		//addclass adicionar una clase a un elemento, en este caso a nuestra letra
	    $(".letra_" + letraPresiona).addClass("animated " + c).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function()
	    {
	    	$(this).remove();
	    });


             }
		
		if (numVeces > 0 ) {
			score+=10;
	        nom_div("puntua").innerHTML = "Score: " + score;
	        //console.log("valor"+score);
	        //Se debe obtener una letra aleatoria del alfabeto y ubicarla en una posición aleatoria...
		
		
		}
		else
		{
			//alert("la letra no esta");  

             swal
             ({ 
             title: "Error!", 
             text: "La letra digitada no esta en pantalla!", 
             type: "warning", 
             confirmButtonText: "ok" 
             }); 
             if(numVeces == 0 && score > 10 )
             {
             	score=score - decremento;
             	console.log("disminuirscore" +score);
             	nom_div("puntua").innerHTML = "Score: " + score;
             }
                                       

		};
		
      
	});

	var randomColor = function()
	{
    	// from http://www.paulirish.com/2009/random-hex-color-code-snippets/
    	return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
    	(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
  	};
	//Accedera los elementos de HTML...
	function nom_div(div)
	{
		return document.getElementById(div);
	}
});