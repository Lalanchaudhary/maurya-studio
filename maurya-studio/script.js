const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
addEventListener('scroll',()=>document.querySelector('.nav').classList.toggle('scrolled',scrollY>10));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
const dialog=document.querySelector('.lightbox'),dialogImage=dialog.querySelector('img');document.querySelectorAll('.tile').forEach(tile=>tile.addEventListener('click',()=>{dialogImage.src=tile.querySelector('img').src;dialogImage.alt=tile.querySelector('img').alt;dialog.showModal()}));dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelector('.enquiry').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target),message=`Hello Maurya Studio, I would like to enquire about your photography services.\n\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nEvent Type: ${d.get('event')}\nEvent Date: ${d.get('date')||'Not specified'}\nMessage: ${d.get('message')||'Not specified'}`;window.open(`https://wa.me/917355573856?text=${encodeURIComponent(message)}`,'_blank')});

// One reusable message + conversion hook for every WhatsApp CTA.
const whatsappMessage='I WANT ID HERE..';
const googleAdsConversionId='AW-XXXXXXXXXX/XXXXXXXXXXX'; // Replace with your Google Ads conversion ID/label.
function trackWhatsAppClick(source){
  if(typeof window.gtag==='function'){
    window.gtag('event','whatsapp_click',{event_category:'contact',event_label:source});
    if(!googleAdsConversionId.includes('XXXXXXXX')) window.gtag('event','conversion',{send_to:googleAdsConversionId});
  }
}
document.querySelectorAll('a[href*="wa.me/917355573856"]').forEach(link=>{
  link.href=`https://wa.me/917355573856?text=${encodeURIComponent(whatsappMessage)}`;
  link.addEventListener('click',()=>trackWhatsAppClick(link.textContent.trim()||'WhatsApp CTA'));
});
const heroImage=document.querySelector('.portrait-frame');
heroImage.setAttribute('role','link');heroImage.setAttribute('tabindex','0');heroImage.setAttribute('aria-label','Message Maurya Studio on WhatsApp');
const openHeroWhatsApp=()=>{trackWhatsAppClick('Hero image');window.open(`https://wa.me/917355573856?text=${encodeURIComponent(whatsappMessage)}`,'_blank')};
heroImage.addEventListener('click',openHeroWhatsApp);heroImage.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openHeroWhatsApp()}});
