jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

});

v_info_name = '';
v_info_details = '';
v_info_plan = '';
v_info_subs = '';

function setDataSubs(){
    localStorage.setItem("validaSubs", '1');
}


v_validasubs = localStorage.getItem("validaSubs");
if(v_validasubs=='1'){
    v_subs = document.getElementById('check_subs')
    v_subs.checked=true;
    subscripcion();
    localStorage.setItem("validaSubs", '0');
};


// asignar el valor por defecto del calendario de las susbcripciones
today = new Date().toISOString().slice(0, 10);
document.getElementById('start').setAttribute("value", today);
document.getElementById('start').setAttribute("min", today);

 
  function checkrd_anombre(v_r) {
	document.getElementById("anombre").value=v_r;
  }

  function checkrd_tipodona(v_r) {
	document.getElementById("tipodona").value=v_r;
  }

  function checkbutton(v_b) {
	v_value = v_b.replace('$','');
	document.getElementById("amount").value=v_value;
  }

  /*function validaemail() {
	v_mail=document.getElementById("email").value;
	v_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(v_regx.test(v_mail)){
		alert("hola")
	}
	else{
		alert("adios")
	}
  }*/

  	function validatarjeta() {
		v_mail=document.getElementById("tarjeta").value;
		//v_regx = /[0-9]{4}+\d\s\S[0-9]{4}+\d\s\S[0-9]{4}+\d\s\S[0-9]{4}/;
		if(v_regx.test(v_mail)){
			alert("hola")
		}
		else{
			alert("adios")
		}
  	}


	/*function slideUp(e) {
		var elem = document.getElementById(e);
		elem.style.transition = "opacity 0.5s linear 0.5s, visibility 0.5s linear 0.5s";
		//elem.style.height = "0px";
		//elem.style.margin = "0px";
		elem.style.opacity = 0;
		elem.style.visibility ='hidden';
	}

  	function slideDown(e) {
		var elem = document.getElementById(e);
		//elem.style.transition = "all 1s ease-in-out";
		elem.style.transition = "opacity 0.5s linear 0.5s, visibility 0.5s linear 0.5s";
		elem.style.opacity = 1;
		elem.style.visibility ='visible';

  	}*/


	/*function validateContact() {
		var valid = true;
		$("#frmContact input[required=true], #frmContact textarea[required=true]").each(function(){
			$(this).removeClass('invalid');
			$(this).attr('title','');
			if(!$(this).val()){ 
				$(this).addClass('invalid');
				$(this).attr('title','This field is required');
				valid = false;
			}
			if($(this).attr("type")=="email" && !$(this).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
				$(this).addClass('invalid');
				$(this).attr('title','Enter valid email');
				valid = false;
			}  
		}); 
		return valid;
	}*/

	function subscripcion() {
		p_a = document.getElementById("rad_plan_a");
		p_b = document.getElementById("rad_plan_b");
		p_c = document.getElementById("rad_plan_c");
		p_per = document.getElementById("rad_plan_per");

		r_m = document.getElementById("rad_per_mes");
		r_t = document.getElementById("rad_per_tri");
		r_s = document.getElementById("rad_per_sem");

		v_calendar=document.getElementById("start");
		v_subs = document.getElementById('check_subs');
		v_amount = document.getElementById("amount_subs");

		if (v_subs.checked==true){
			p_a.checked = true;
			p_a.disabled = false;
			p_b.disabled = false;
			p_c.disabled = false;
			p_per.disabled = false;
			
			r_m.disabled = false;
			r_t.disabled = false;
			r_s.disabled = false;
			v_calendar.disabled = false;
			f_plan();
		}
		else{
			p_a.disabled = true;
			p_b.disabled = true;
			p_c.disabled = true;
			p_per.disabled = true;
			
			r_m.disabled = true;
			r_t.disabled = true;
			r_s.disabled = true;
			v_calendar.disabled = true;
			v_amount.disabled = false;
		}


	}


/*	function openModal() {
		v_subs = document.getElementById('check_subs')
		if(v_subs.checked==true){
			element = document.getElementById("div_modal_1");
			element.classList.add("active");
	
			element = document.getElementById("div_modal_2");
			element.classList.add("active");
		}
		else{
			//slideUp("div_subs_info")
			v_amount=document.getElementById("amount");
			v_amount.disabled = false;
			f_clear_subs();
		}
	 }

	 function closeModal(v_val) {
		element = document.getElementById("div_modal_1");
		element.classList.remove("active");

		element = document.getElementById("div_modal_2");
		element.classList.remove("active");

		//slideDown("div_subs_info");
		f_plan();

		if(v_val==false){
			v_subs = document.getElementById('check_subs')
			v_subs.checked=false;
			v_amount= document.getElementById("amount");
			v_amount.value ='';

			//slideUp("div_subs_info")
			v_amount=document.getElementById("amount");
			v_amount.disabled = false;

			f_clear_subs();
		}
	 }*/

	function f_marca(){
		cardnumber = document.getElementById("card-number");
		others = ['0','1','2','7','8','9'];

		v_marca1 = document.getElementById("marca1");
		v_marca2 = document.getElementById("marca2");

		
		if(cardnumber.value=='5'){
			v_marca1.src="fonts/icomoon/mc.svg";
			v_marca2.src="fonts/icomoon/mc.svg";
		}
		if(cardnumber.value=='4'){
			v_marca1.src="fonts/icomoon/visa.svg";
			v_marca2.src="fonts/icomoon/visa.svg";
		}
		if(cardnumber.value=='6'){
			v_marca1.src="fonts/icomoon/discover.svg";
			v_marca2.src="fonts/icomoon/discover.svg";
		}
		if(cardnumber.value=='3'){
			v_marca1.src="fonts/icomoon/amex.svg";
			v_marca2.src="fonts/icomoon/amex.svg";
		}
		if(others.includes(cardnumber.value)){
			v_marca1.src="fonts/icomoon/others.svg";
			v_marca2.src="fonts/icomoon/others.svg";
		}
	}

	function f_clear_subs(){

		//v_label=document.getElementById("label_plan");
		//v_label.innerHTML ='';

		//v_label=document.getElementById("label_info");
		//v_label.innerHTML ='';

		v_amount=document.getElementById("amount");
		v_amount.value =txt_subs.value;
	}


	function f_info(){
		i_nombre = document.getElementById("name");

		form = document.getElementsByName("radio_anombre");
		v_radio_selected = ''

		for (var i = 0; i < form.length; i++) {
		var radio = form[i];
			if(radio.checked==true){
				v_radio_selected = radio.value
			}
		}

		v_info_name = 'Donativo a nombre de: '+i_nombre.value;
		v_info_details = 'A nombre: '+v_radio_selected;

		v_label=document.getElementById("label_name");
		v_label.innerHTML =v_info_name;

		v_label=document.getElementById("label_details");
		v_label.innerHTML =v_info_details;
	}


	function f_plan(){
		p_a = document.getElementById("rad_plan_a");
		p_b = document.getElementById("rad_plan_b");
		p_c = document.getElementById("rad_plan_c");
		p_per = document.getElementById("rad_plan_per");

		r_m = document.getElementById("rad_per_mes");
		r_t = document.getElementById("rad_per_tri");
		r_s = document.getElementById("rad_per_sem");

		txt_subs = document.getElementById("amount_subs");
		v_calendar=document.getElementById("start");



		if(p_a.checked==true){
			txt_subs.value=100;
			r_m.checked = true;
			txt_subs.disabled = true;

			r_m.disabled = true;
			r_t.disabled = true;
			r_s.disabled = true;
			v_info_plan='' +p_a.value+ ':'; 
			v_info_subs='Monto $'+txt_subs.value+' / Periodicidad: '+r_m.value+ ' / Desde la fecha: '+ v_calendar.value;
		}

		if(p_b.checked==true){
			txt_subs.value=300;
			r_t.checked = true;
			txt_subs.disabled = true;

			r_m.disabled = true;
			r_t.disabled = true;
			r_s.disabled = true;
			v_info_plan='' +p_b.value+ ':'; 
			v_info_subs='Monto $'+txt_subs.value+' / Periodicidad: '+r_t.value+ ' / Desde la fecha: '+ v_calendar.value;
		}

		if(p_c.checked==true){
			txt_subs.value=600;
			r_s.checked = true;
			txt_subs.disabled = true;

			r_m.disabled = true;
			r_t.disabled = true;
			r_s.disabled = true;
			v_info_plan='' +p_c.value+ ':'; 
			v_info_subs='Monto $'+txt_subs.value+' / Periodicidad: '+r_t.value+ ' / Desde la fecha: '+ v_calendar.value;
		}

		if(p_per.checked==true){
			p_per.checked = true;
			txt_subs.disabled = false;

			r_m.disabled = false;
			r_t.disabled = false;
			r_s.disabled = false;

			form = document.getElementsByName("rad_per");
			v_radio_selected = ''
    
    		for (var i = 0; i < form.length; i++) {
    		var radio = form[i];
				if(radio.checked==true){
					v_radio_selected = radio.value
				}
    		}
			v_info_plan='' +p_per.value+ ':'; 
			v_info_subs='Monto $'+txt_subs.value+' / Periodicidad: '+v_radio_selected+ ' / Desde la fecha: '+ v_calendar.value;
		}

		//v_label=document.getElementById("label_plan");
		//v_label.innerHTML =v_info_plan;

		//v_label=document.getElementById("label_info");
		//v_label.innerHTML =v_info_subs;

		//v_amount=document.getElementById("amount");
		//v_amount.value =txt_subs.value;
		//v_amount.disabled = true;
	}
