
document.querySelectorAll('.nav details a').forEach(a=>{
  a.addEventListener('click',()=>{a.closest('details').removeAttribute('open')});
});
