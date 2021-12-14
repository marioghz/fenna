// Defining a function to display error message
function printMessage(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    v_name = document.contactForm.name.value;
    v_subject = document.contactForm.subject.value;
    v_email = document.contactForm.email.value;
    v_message = document.contactForm.message.value;

    printMessage("successMess", "");
    
	// Defining error variables with a default value
    var nameErr = subjectErr = emailErr = messageErr = true;
    
    // Validate name
    if(v_name == "") {
        printMessage("nameErr", "Por favor ingrese su nombre");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(v_name) === false) {
            printMessage("nameErr", "Por favor ingrese un nombre correcto");
        } else {
            printMessage("nameErr", "");
            nameErr = false;
        }
    }


    // Validate subject
    if(v_subject == "") {
        printMessage("subjectErr", "Por favor ingrese su asunto");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(v_subject) === false) {
            printMessage("subjectErr", "Por favor ingrese un asunto correcto");
        } else {
            printMessage("subjectErr", "");
            subjectErr = false;
        }
    }
    
    // Validate email address
    if(v_email == "") {
        printMessage("emailErr", "Por favor ingrese su correo");
    } else {
        // Regular expression for basic email validation
        var regex = /\S+@\S+\.\S+/;
        if(regex.test(v_email) === false) {
            printMessage("emailErr", "Por favor ingrese un correo correcto");
        } else{
            printMessage("emailErr", "");
            emailErr = false;
        }
    }

    // Validate menssage
    if(v_message == "") {
        printMessage("messageErr", "Por favor ingrese su mensaje");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(v_message) === false) {
            printMessage("messageErr", "Por favor ingrese un mensaje correcto");
        } else {
            printMessage("messageErr", "");
            messageErr = false;
        }
    }
    
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || subjectErr || emailErr || messageErr) == true) {
       return false;
    } else {
        sendEmail();
        printMessage("successMess", "Correo enviado");
        openModalThanks();
    }
    
};

function openModalThanks() {
	element = document.getElementById("modal-wrapper");
	element.classList.add("open");
}

function closeModalThanks() {

	element = document.getElementById("modal-wrapper");
	element.classList.remove("open");
    limpiarForm();
}

function limpiarForm() {

    printMessage("successMess", "");
    document.contactForm.name.value = '';
    document.contactForm.subject.value = '';
    document.contactForm.email.value = '';
    document.contactForm.message.value = '';
}


function sendEmail() {
	v_nombre=document.getElementById("name").value;
	v_email=document.getElementById("email").value;
	v_subject=document.getElementById("subject").value;
	v_message=document.getElementById("message").value.replaceAll('\n', '<br>');


	Email.send({
		Host: "smtp.titan.email",
		Username: "admin@fundacionfenna.org",
		Password: "admin1234.",
		To: "info@fundacionfenna.org",
		From: "admin@fundacionfenna.org",
		Subject: v_subject,
		//Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>" 
		Body : "<html><h3> Nombre: "+v_nombre+"</h3><h3> Email: "+v_email+"</h3><strong>"+v_message+"</strong><br></br><em></em></html>" 
	});
}