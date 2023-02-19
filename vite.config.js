// import {defineConfig} from 'vite'


// export default defineConfig({
// 	plugins: []	
// })

let count_home = 0
let count_guest = 0
let home = document.getElementById('homescore');
let guest = document.getElementById('guestscore');


//кнопки очков - домой
function plusone_home() {
	count_home += 1
	home.textContent = count_home
}
function plustwo_home() {
	count_home += 2
	home.textContent = count_home
}
function plusthree_home() {
	count_home += 3
	home.textContent = count_home
}

//кнопки очков - гости
function plusone_guest() {
	count_guest += 1
	guest.textContent = count_guest
}
function plustwo_guest() {
	count_guest += 2
	guest.textContent = count_guest
}
function plusthree_guest() {
	count_guest += 3
	guest.textContent = count_guest
}

//reset
function reset() {
	var newItem = document.createElement("p");
	var textNode = document.createTextNode(count_home + ' - ' + count_guest);
	newItem.appendChild(textNode);

	var list = document.getElementById("myDiv");
	list.insertBefore(newItem, list.childNodes[0]);
	
	home.textContent = 0
	guest.textContent = 0
	count_home = 0
	count_guest = 0
  }

  function clear() {
	
  }