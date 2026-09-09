const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
addEventListener('scroll',()=>document.querySelector('.nav').classList.toggle('scrolled',scrollY>10));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
const dialog=document.querySelector('.lightbox'),dialogImage=dialog.querySelector('img');document.querySelectorAll('.tile').forEach(tile=>tile.addEventListener('click',()=>{dialogImage.src=tile.querySelector('img').src;dialogImage.alt=tile.querySelector('img').alt;dialog.showModal()}));dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelector('.enquiry').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target),message=`Hello Maurya Studio, I would like to enquire about your photography services.\n\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nEvent Type: ${d.get('event')}\nEvent Date: ${d.get('date')||'Not specified'}\nMessage: ${d.get('message')||'Not specified'}`;window.open(`https://wa.me/917355573856?text=${encodeURIComponent(message)}`,'_blank')});

// Google Ads conversion snippet for WhatsApp clicks.
function gtag_report_conversion(url){
  let completed=false;
  const callback=()=>{if(completed)return;completed=true;if(typeof url!=='undefined')window.location=url};
  if(typeof window.gtag!=='function'){callback();return false}
  window.gtag('event','conversion',{
    send_to:'AW-18438770077/fxxBCOvzv_EcEJ2bpdhE',
    value:1.0,
    currency:'INR',
    event_callback:callback
  });
  // Do not leave a visitor waiting if the Google tag is blocked or slow.
  window.setTimeout(callback,1200);
  return false;
}
const whatsappMessage='I WANT ID HERE..';
document.querySelectorAll('a[href*="wa.me/917355573856"]').forEach(link=>{
  link.href=`https://wa.me/447355573856?text=${encodeURIComponent(whatsappMessage)}`;
  link.setAttribute('onclick','return gtag_report_conversion(this.href)');
});
const heroImage=document.querySelector('.portrait-frame');
heroImage.setAttribute('role','link');heroImage.setAttribute('tabindex','0');heroImage.setAttribute('aria-label','Message Maurya Studio on WhatsApp');
const heroWhatsAppUrl=`https://wa.me/447355573856?text=${encodeURIComponent(whatsappMessage)}`;
const openHeroWhatsApp=()=>gtag_report_conversion(heroWhatsAppUrl);
heroImage.setAttribute('onclick','return gtag_report_conversion(heroWhatsAppUrl)');heroImage.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openHeroWhatsApp()}});
