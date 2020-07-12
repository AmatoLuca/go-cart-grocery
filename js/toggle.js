function openNav() {
    document.getElementById('mySidebar').style.width = "250px";
}

function closeNav() {
    mySidebar.style.width = "0";   
}

let itemClose = document.querySelector('.closebtn');
itemClose.addEventListener('click', closeNav, false); 

let itemOpen = document.querySelector('.openbtn');
itemOpen.addEventListener('click', openNav, false); 
