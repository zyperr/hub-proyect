const darkBtn = document.getElementById('darkMode');
const agregarClase = document.getElementById('navegacion');
const navClase = document.getElementById('navDark');
darkBtn.addEventListener('click',()=> {
    document.body.classList.toggle('dark');
    agregarClase.classList.toggle('bg-dark'); 
    navClase.classList.toggle('bg-dark');
    darkBtn.classList.toggle('active');
});



