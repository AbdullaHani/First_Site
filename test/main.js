

const btn = document.getElementById("btn");
const div = document.querySelector('div');
const body1 = document.getElementsByTagName('body')[0];
btn.addEventListener('click', ()=>{
    div.textContent= "yo man";
    div.style.cssText="background:black; color:white;"
})
const theme = document.getElementById('theme');
const div2 = document.createElement('div');
div2.textContent="yo"
theme.addEventListener('change', ()=>{
    div.innerHTML="<li>yo</li>";
    body1.classList.toggle('dark');
    div.inner
})