// Mobile nav toggle
(function(){
  var t=document.querySelector('.nav__toggle'),
      l=document.querySelector('.nav__links');
  if(t&&l){
    t.addEventListener('click',function(){
      var open=l.classList.toggle('open');
      t.setAttribute('aria-expanded',open);
    });
    l.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){l.classList.remove('open');});
    });
  }
  // Contact form: no backend — leads route to Royal LePage / email
  var f=document.getElementById('contactForm');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var name=encodeURIComponent(f.name.value||''),
          email=encodeURIComponent(f.email.value||''),
          phone=encodeURIComponent(f.phone.value||''),
          topic=encodeURIComponent(f.topic.value||''),
          msg=encodeURIComponent(f.message.value||'');
      var body='Name: '+name+'%0D%0AEmail: '+email+'%0D%0APhone: '+phone+
               '%0D%0AInquiry: '+topic+'%0D%0A%0D%0A'+msg;
      window.location.href='mailto:missyfoley@royallepage.ca?subject=Website%20Inquiry%20from%20'+name+'&body='+body;
      var s=document.getElementById('formStatus');
      if(s){s.textContent='Opening your email app to send — or call Missy directly at 403-877-9008.';}
    });
  }
})();
