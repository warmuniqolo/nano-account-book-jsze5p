// auto-update: 2025-08-29T17:19:28.724336Z
function add(){ const i=document.getElementById('i'); if(!i.value) return;
 const li=document.createElement('li'); li.textContent=i.value; list.appendChild(li); i.value=''; }