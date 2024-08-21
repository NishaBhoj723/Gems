let popup= document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}



const btn=document.getElementById('btn');
const contactForm=document.getElementById('contactForm');
contactForm.addEventListener('submit',function(e){
    e.preventDefault();
    const params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value,
    };
    btn.value='Sending....';
    const serviceId="service_buuirpr"
    const temlateId="template_y42a37c"
    emailjs.send(serviceId,temlateId,params).then(()=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        document.getElementById("message").value="";
        btn.value='Send Email';
        openPopup();
    
    },(err)=>{
        btn.value='Send Email';
        alert(JSON.stringify(err));
    });
}) ;