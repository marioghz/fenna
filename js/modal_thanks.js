function openModalThanks() {
        element = document.getElementById("modal-wrapper");
        element.classList.add("open");

        element = document.getElementById("page-wrapper");
        element.classList.add("blur-it");
 }

 function closeModalThanks(v_val) {
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
 }