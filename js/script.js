/*отслеживает клик и вызывает функцию, Х это индетификатор 
ТОПНАВ, дальше она делает проверку и если инд топнав, содержит клас топнав то 
при нажатии добавляется класс респонсив. в обратном случае, мы оставляем только топнав*/
menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav");
	
	if (x.className === "topnav") {
		x.className += " responsive";
	}
	else{
		x.className = "topnav"; 
	}
}
