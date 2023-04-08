let op;
let r;
let n = '';


function clearAll() {
	op = null;
	Resp.value = null;
	n = '';
	Snum1.value = null;
	r =  0;
}

btn1.onclick= () => {
	Resp.value += '1';
	n = Resp.value;
}

btn2.onclick= () => {

	Resp.value += '2';
	n = Resp.value;
}

btn3.onclick= () => {

	Resp.value += '3';
	n = Resp.value;
}

btn4.onclick= () => {

	
	Resp.value += '4';
	n = Resp.value;
}

btn5.onclick= () => {

	Resp.value += '5';
	n = Resp.value;
}

btn6.onclick= () => {

	
	Resp.value += '6';
	n = Resp.value;
}

btn7.onclick= () => {
	
	Resp.value += '7';
	n = Resp.value;
}

btn8.onclick= () => {
	Resp.value += '8';
	n = Resp.value;
}

btn9.onclick= () => {
	
	Resp.value += '9';
	n = Resp.value;
}

btn0.onclick= () => {
	
	Resp.value += '0';
	n = Resp.value;
}
btnDot.onclick = () => {
	Resp.value += '.';
	n = Resp.value;
}


btnA.onclick = ()=> {
	op = 0;
	Resp.value = null;
	Snum1.value = n;
}
btnS.onclick = ()=> {
	op = 1;
	Resp.value = null;
	Snum1.value = n;
}

btnM.onclick = ()=> {
	op = 2;
	Resp.value = null;
	Snum1.value = n;
}

btnD.onclick = ()=> {
	op = 3;
	Resp.value = null;
	Snum1.value = n;
}
btnCls.onclick = ()=> {
	clearAll();
}



btnI.onclick = () => {
	if (op == 0)  {
		r = parseFloat(Snum1.value) + parseFloat(Resp.value);
		Resp.value = r;
	}
	if (op == 1)  {
		r = parseFloat(Snum1.value) - parseFloat(Resp.value);
		Resp.value = r;
	}
	if (op == 2)  {
		r = parseFloat(Snum1.value) * parseFloat(Resp.value);
		Resp.value = r;
	}
	if (op == 3)  {
		r = parseFloat(Snum1.value) / parseFloat(Resp.value);
		Resp.value = r;
	}
	n = Resp.value;
}