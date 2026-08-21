const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
menuBtn?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')}));
document.querySelectorAll('[data-placeholder]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();alert(`${a.dataset.placeholder} URL has not been provided yet. Replace this placeholder with your real profile URL.`)}));
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)+'%'},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
