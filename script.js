/* ── CURSOR ─────────────────── */
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)}
animRing();

/* ── NAV SCROLL ─────────────── */
const nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>60)});

/* ── MOBILE MENU ────────────── */
const ham=document.getElementById('hamburger'),mob=document.getElementById('mobileMenu');
function toggleMobile(){ham.classList.toggle('open');mob.classList.toggle('open')}
function closeMobile(){ham.classList.remove('open');mob.classList.remove('open')}

/* ── SCROLL REVEAL ──────────── */
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el=>obs.observe(el));

/* ── COUNTER ANIMATION ──────── */
function animCounter(el){
  const target=+el.dataset.target,duration=1800;
  let start=null;
  const step=ts=>{
    if(!start)start=ts;
    const p=Math.min((ts-start)/duration,1);
    const ease=p<.5?4*p*p*p:(p-1)*(2*p-2)*(2*p-2)+1;
    el.textContent=Math.round(ease*target);
    if(p<1)requestAnimationFrame(step);
    else el.textContent=target;
  };
  requestAnimationFrame(step);
}
const cobs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){document.querySelectorAll('.cnum').forEach(animCounter);cobs.disconnect()}
  })
},{threshold:.5});
const band=document.querySelector('.counter-band');
if(band)cobs.observe(band);

/* ── 3D PARALLAX ON EXPLODED ── */
const expStack=document.getElementById('expStack');
if(expStack){
  let tX=0,tY=0,cX=0,cY=0;
  document.addEventListener('mousemove',e=>{
    const cx=window.innerWidth/2, cy=window.innerHeight/2;
    tX=(e.clientX-cx)/cx*8;
    tY=(e.clientY-cy)/cy*5;
  });
  function animExp(){
    cX+=(tX-cX)*.06; cY+=(tY-cY)*.06;
    expStack.style.transform=`rotateX(${18-cY}deg) rotateY(${-10+cX}deg)`;
    requestAnimationFrame(animExp);
  }
  animExp();
}

/* ── HOVER LAYER HIGHLIGHT ──── */
document.querySelectorAll('.exp-layer').forEach(layer=>{
  layer.addEventListener('mouseenter',()=>{
    document.querySelectorAll('.exp-layer').forEach(l=>l.style.opacity='0.45');
    layer.style.opacity='1';
    layer.style.filter='brightness(1.5)';
  });
  layer.addEventListener('mouseleave',()=>{
    document.querySelectorAll('.exp-layer').forEach(l=>{
      l.style.opacity='1';
      l.style.filter='';
    });
  });
});

/* ── SMOOTH HOVER ──────────── */
document.querySelectorAll('.chip,.hchip,.tech-chip,.feat,.sdg-card,.exp-spec-card,.bp-box').forEach(el=>{
  el.addEventListener('mouseenter',()=>el.style.willChange='transform');
  el.addEventListener('mouseleave',()=>el.style.willChange='');
});