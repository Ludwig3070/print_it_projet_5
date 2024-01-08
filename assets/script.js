const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* recuperation  des fleches */

let arrowLeft=document.querySelector(".arrow_left");
let arrowRight=document.querySelector(".arrow_right");


/* ajout des bullets */

/* recupere le parent existant */
let parentElement= document.querySelector(".dots");
/* ajoute les balises div.dot */
 for (let i in slides){	
	parentElement.insertAdjacentHTML("beforeend",'<div class="dot"></div>');}

/* ajoute la classe active sur le premier bullet */
let dot=parentElement.querySelector(".dot:first-child")
dot.classList.add("dot_selected")



/**
 * cette fonction gere le click sur les chevrons de la banniere
 * @param {string} n soit "+" soit"-" ou rien = "+"
 */
function traitement(n="+"){	
	
	let bullet_actif 
	/* recherche du bullet actif */
	let bullet = parentElement.querySelectorAll(".dot")
	
	for(let i in bullet){	
		bullet[i].className==="dot dot_selected" ? bullet_actif=i:null
		/* bullet_actif contient l'indice du bullet actif */			
	}
	/* effacement de la classe bullet actif et reecriture dans le suivant */	
	bullet[bullet_actif].classList.remove("dot_selected")
	/* si le paramatre de la fonction est + alors... sinon ... */
	n==="+" ? bullet_actif++ : bullet_actif--
	
	/* si bullet_actif negatif alors passe au dernier de slides */
	bullet_actif < 0 ? bullet_actif=(bullet.length-1) :null
	
	/* controle la valeur max de bullet_active sinon depassement */
	bullet_actif === (bullet.length) ? bullet_actif=0:null	
	/* ajoute dot_selected au slecteur actif */
	bullet[bullet_actif].classList.add("dot_selected")	
	/* AFFICHAGE DE L IMAGE CORRSESPONDANTE A bullet_actif */
	let banner = document.querySelector("#banner img ")
	banner.setAttribute("src",`./assets/images/slideshow/${slides[bullet_actif].image}`) 
	/* changement du texte selon la valeur de bullet_actif */
	let texte = document.querySelector("#banner p")
	
	texte.innerHTML=(`${slides[bullet_actif].tagLine}`)
	
	
		
}

/* capture du clic droit */
 arrowRight.addEventListener("click",()=>traitement()) 
/* capture du clic gauche */
 arrowLeft.addEventListener("click",()=>traitement("-")) 

