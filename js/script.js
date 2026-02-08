document.addEventListener('DOMContentLoaded',function(){
  // Set current year in footer
  const y=document.getElementById('year');if(y) y.textContent=new Date().getFullYear();

  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name=form.name.value||'Customer';
      const phone=form.phone.value||'';
      const message=form.message.value||'';
      // For the demo we simply open a pre-filled WhatsApp message — replace with server endpoint for production
      const text=`Hi, my name is ${name}. ${message} (${phone})`;
      const waLink=`https://wa.me/911234567890?text=${encodeURIComponent(text)}`;
      window.open(waLink,'_blank');
    });
  }
});
