function commentBox(){
    var nombre=document.getElementById('nombre').value;
	var comentario=document.getElementById('comentario').value;

    if(nombre =="" || comentario ==""){
		alert("Porfavor introduce la informacion requerida!");
	}else{
		var parent=document.createElement('div');
		var el_nombre=document.createElement('h5');
		var el_mensaje=document.createElement('p');
		var el_line=document.createElement('hr');
		var txt_nombre=document.createTextNode(nombre);
		var txt_mensaje=document.createTextNode(comentario);
		el_nombre.appendChild(txt_nombre);
		el_mensaje.appendChild(txt_mensaje);
		el_line.style.border='1px solid #000';
		el_mensaje.style.fontSize='25px';
		el_nombre.style.fontSize='25px';
		el_mensaje.style.color='#000';
		el_nombre.style.color='#000';
		el_mensaje.style.padding='0';
		el_nombre.style.padding='0';
		parent.style.marginTop='3px';
		parent.style.borderRadius='15px';
		parent.style.boxShadow='0 0 20px rgba(192, 203, 251, 0.7)';
		parent.style.background='#fff';
		parent.appendChild(el_nombre);
		parent.appendChild(el_line);
		parent.appendChild(el_mensaje);
		parent.setAttribute('class', 'pane');
		document.getElementById('resultado').appendChild(parent);
 
		document.getElementById('nombre').value="";
		document.getElementById('comentario').value="";
	}
}