const userAvatar = document.getElementById("userAvatar");
const dropdownMenu = document.getElementById("dropdownMenu");

userAvatar.addEventListener('click', (e) => {
	e.stopPropagation();
	userAvatar.classList.toggle("dropdown-trigger-personalNavActive");
	dropdownMenu.classList.toggle("dropdownMenu-Show");
})

window.onclick = function(event){
	dropdownMenu.classList.remove("dropdownMenu-Show");
	userAvatar.classList.remove("dropdown-trigger-personalNavActive");
}