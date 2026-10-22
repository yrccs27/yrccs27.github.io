// Light / dark switch. The choice is remembered in this browser.
(function(){
  var root=document.documentElement, btn=document.getElementById('theme-btn');
  function apply(t){
    if(t==='dark'){root.setAttribute('data-theme','dark');btn.textContent='Light mode';btn.setAttribute('aria-pressed','true');}
    else{root.setAttribute('data-theme','light');btn.textContent='Dark mode';btn.setAttribute('aria-pressed','false');}
  }
  var saved=null; try{saved=localStorage.getItem('yrccs-theme');}catch(e){}
  apply(saved==='dark'?'dark':'light');
  btn.addEventListener('click',function(){
    var next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    apply(next); try{localStorage.setItem('yrccs-theme',next);}catch(e){}
  });
})();
