jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

});


/// definimos las fechas limites de las causas
v_fecha_causa_1 = "Feb 31, 2022 23:59:59";
v_fecha_causa_2 = "Jan 1, 2023 23:59:59";
v_fecha_causa_3 = "Jan 1, 2023 23:59:59";
v_fecha_causa_4 = "Sep 29, 2022 23:59:59";
v_fecha_causa_5 = "Feb 22, 2022 23:59:59";
v_fecha_causa_6 = "Dec 31, 2022 23:59:59";


function setDataSubs(){
    localStorage.setItem("validaSubs", '1');
}

function getData(v_id){
    //gettting the values
    var v_causa = v_id;
    //saving the values in local storage
    localStorage.setItem("txtCausa", v_causa);
}

function stoperror(e) {
	return true;
 }

function f_tempo(v_id,v_fecha) {
	// Get today's date and time
	var now = new Date().getTime();
  
	// Find the distance between now and the count down date
	var countDownDate = new Date(v_fecha).getTime();
	var distance = countDownDate - now;
  
	// Time calculations for days, hours, minutes and seconds
	var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 31));
	var days = Math.round(Math.floor(distance % (1000 * 60 * 60 * 24 * 31)) / (1000 * 60 * 60 * 31));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

	// Display the result in the element with id=v_id
	try {
		document.getElementById(v_id).innerHTML = months + " mes(es) " + days + " día(s) restantes";
	 } catch (e) { stoperror(e) }
	
  
	// If the count down is finished, write some text
	if (distance < 0) {
	  try {
		document.getElementById(v_id).innerHTML = "FINALIZADO";
	 } catch (e) { stoperror(e) }
	}
  }


  f_tempo("v_temp_causa_1",v_fecha_causa_1);
  f_tempo("v_temp_causa_2",v_fecha_causa_2);
  f_tempo("v_temp_causa_3",v_fecha_causa_3);
  f_tempo("v_temp_causa_4",v_fecha_causa_4);
  f_tempo("v_temp_causa_5",v_fecha_causa_5);
  f_tempo("v_temp_causa_6",v_fecha_causa_6);
  

  function showHidden() {
	x =document.getElementsByClassName("dispy_hidd");
	while(x.length>0){
	  x[0].className += " dispy_show";
	  x[0].classList.remove("dispy_hidd");
	}
  }
  
  
  function hideDisp() {
	x =document.getElementsByClassName("dispy_show");
  
	while(x.length>0){
	  x[0].className+=" dispy_hidd";
	  x[0].classList.remove("dispy_show");
	}
  }


