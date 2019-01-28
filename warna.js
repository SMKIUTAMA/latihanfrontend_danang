const button1 = document.getElementById('warna');
		button1.onclick = function(){
			document.body.classList.toggle('biru-muda');
					};
		 const button2 =document.createElement('button');
		 const nama = document.createTextNode('Random');
		 button2.appendChild(nama);
		 button2.setAttribute('type','button');
		 button1.after(button2);
		 button2.addEventListener('click', function(){
		 	const r = Math.round(Math.random() * 255 + 1);
		 	const g = Math.round(Math.random() * 255 + 1);
		 	const b = Math.round(Math.random() * 255 + 1);
		 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
		 });
		 const biru =document.querySelector('input[name=sbiru]');
		 const hijau =document.querySelector('input[name=shijau]');
		 const merah =document.querySelector('input[name=smerah]');
		 merah.addEventListener('input', function(){
		 	const R = merah.value;
		 	const G = hijau.value;
		 	const B = biru.value; 
		 	document.body.style.backgroundColor ='rgb('+R+','+G+','+B+')';

		 });
		 hijau.addEventListener('input', function(){
		 	const R = merah.value;
		 	const G = hijau.value;
		 	const B = biru.value; 
		 	document.body.style.backgroundColor ='rgb('+R+','+G+','+B+')';
		 });
		 biru.addEventListener('input', function(){
		 	const R = merah.value;
		 	const G = hijau.value;
		 	const B = biru.value; 
		 	document.body.style.backgroundColor ='rgb('+R+','+G+','+B+')';
		 });

		 //bermain warna dengan mousemove
		 document.body.addEventListener('mousemove', function(event){
		 	//posis mouse
		 	const XPos = Math.round(event.clientX / window.innerWidth * 255);
		 	const YPos = Math.round(event.clientY / window.innerHeight * 255);
		 	document.body.style.backgroundColor = 'rgb (' +XPos+','+YPos+'100)'; 
		 });