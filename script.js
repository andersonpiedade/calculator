insert = (num)=>{
	var numero = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = numero + num;
}

clean = ()=>{
	document.getElementById('res').innerHTML = '';
}

back = ()=>{
	var res = document.getElementById('res').innerHTML;
	if(res){
		document.getElementById('res').innerHTML = res.substring(0, res.length -1);
	}
}

calc = ()=>{
	var res = document.getElementById('res').innerHTML;
	if(res){
		document.getElementById('res').innerHTML = eval(res);
	}else {
		document.getElementById('res').innerHTML = 'Vazio...';
	}
}
