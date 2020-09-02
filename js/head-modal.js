function openNav() {
	document.querySelector(".promo__hidden-menu").style.width = "100%";
	document.querySelector("html").style.overflow = 'hidden';
  }
  
  function closeNav() {
	document.querySelector(".promo__hidden-menu").style.width = "0%";
	document.querySelector("html").style.overflow = 'visible';
  }