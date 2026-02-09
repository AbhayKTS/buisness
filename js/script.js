document.addEventListener('DOMContentLoaded',function(){
  // Set current year in footer
  const y=document.getElementById('year');if(y) y.textContent=new Date().getFullYear();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  if(mobileMenuBtn && mainNav){
    mobileMenuBtn.addEventListener('click', function(){
      mainNav.classList.toggle('active');
      this.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
    });
    // Close menu when clicking a link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
      });
    });
  }

  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      
      const nameInput = form.querySelector('#name');
      const phoneInput = form.querySelector('#phone');
      const messageInput = form.querySelector('#message');
      
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const message = messageInput.value.trim();
      
      // Validation
      let isValid = true;
      
      // Reset previous errors
      document.querySelectorAll('.error-msg').forEach(el => el.remove());
      document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
      
      if(!name || name.length < 2){
        showError(nameInput, 'Please enter your name (min 2 characters)');
        isValid = false;
      }
      
      if(!phone || !/^[6-9]\d{9}$/.test(phone.replace(/\D/g,''))){
        showError(phoneInput, 'Please enter a valid 10-digit phone number');
        isValid = false;
      }
      
      if(!isValid) return;
      
      // Success - send to WhatsApp
      const text = `🛒 *New Message from Website*\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n💬 Message: ${message || 'No message'}\n\nPlease respond. Thank you! 🙏`;
      const waLink = `https://wa.me/911234567890?text=${encodeURIComponent(text)}`;
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'success-msg';
      successMsg.innerHTML = '✅ Opening WhatsApp... Thank you for contacting us!';
      form.appendChild(successMsg);
      
      setTimeout(() => {
        window.open(waLink,'_blank');
        form.reset();
        successMsg.remove();
      }, 1000);
    });
  }
  
  function showError(input, message){
    input.classList.add('input-error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-msg';
    errorDiv.textContent = message;
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  }
});
