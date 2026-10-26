(()=>{
const nav=document.querySelector('.nav'),ind=nav.querySelector('.ind'),L=[...nav.querySelectorAll('.nav-links a')];
const cur=()=>L.find(a=>a.classList.contains('on'))||L[0];
const mv=a=>{ind.style.width=a.offsetWidth+'px';ind.style.transform=`translateX(${a.offsetLeft}px)`};
document.fonts.ready.then(()=>mv(cur()));addEventListener('resize',()=>mv(cur()));
L.forEach(a=>{a.addEventListener('mouseenter',()=>mv(a));a.addEventListener('focus',()=>mv(a))});
nav.querySelector('.nav-links').addEventListener('mouseleave',()=>mv(cur()));
let y=scrollY;
addEventListener('scroll',()=>{const d=scrollY-y;nav.classList.toggle('small',scrollY>40);
 if(Math.abs(d)>6){nav.classList.toggle('hide',d>0&&scrollY>140);y=scrollY}},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.setProperty('--d',(i%4)*.09+'s');io.observe(el)});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)
document.querySelectorAll('.card,.quote').forEach(c=>{
 c.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
  c.style.setProperty('--ry',(px-.5)*9+'deg');c.style.setProperty('--rx',(.5-py)*9+'deg');c.style.setProperty('--mx',px*100+'%');c.style.setProperty('--my',py*100+'%')});
 c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});
const LD=document.querySelector('.landing');
if(LD){const f=()=>{const p=Math.min(scrollY/innerHeight,1);LD.style.setProperty('--p',p);document.documentElement.style.setProperty('--sc',p)};f();addEventListener('scroll',f,{passive:true})}
})();