const charNames = [
	"Alambique",
	"Bolo-fofo",
	"Cascavel",
	"Calabreso",
	"CNPJoto",
	"Descascado",
	"Euclides",
	"Figaro",
	"Gul",
	"Huai",
	"Ihain",
	"Jezebel",
	"Karamba",
	"Laravel",
	"Merimbal",
	"Natuza",
	"Obtuso",
	"Pegmatito",
	"Queue",
	"Rochoso",
	"Rogéria",
	"Sucuri",
	"Tuta",
	"Uiui",
	"Vidala",
	"Ximbica",
	"Will",
	"Ysadoro",
	"Zigzago",
];
const charRacesM = ["Anão", "Elfo", "Gnomo", "Humano", "Orc"];
const charRacesF = ["Anã", "Elfa", "Gnoma", "Humana", "Orc"];
const charClassesM = ["Arqueiro", "Feiticeiro", "Guerreiro", "Ladino", "Monge"];
const charClassesF = ["Arqueira", "Feiticeira", "Guerreira", "Ladina", "Monja"];

class Character {
	/**
	 * @param {string} inputRace will receive the user input for character's name, otherwise a random value from charName
	 * @param {string} inputClass receives random value from charClasses
	 */
	constructor() {
		this._race = this.getRace;
		this._class = this.getClass;
		this._name = this.getName;
	}

	/**
	 * @returns {string}
	 */
	get getName() {
		return charNames[handleRandom(charNames)];
	}
	/**
	 * @param {string} string
	 */
	set getName(string) {}

	/**
	 * @returns {string}
	 */
	get getRace() {
		if (document.getElementById("ratioMAL").checked) {
			return charRacesM[handleRandom(charRacesM)];
		} else {
			return charRacesF[handleRandom(charRacesF)];
		}
	}
	/**
	 * @param {string} string
	 */
	set getRace(string) {}

	/**
	 * @returns {string}
	 */
	get getClass() {
		if (document.getElementById("ratioMAL").checked) {
			return charClassesM[handleRandom(charClassesM)];
		} else {
			return charClassesF[handleRandom(charClassesF)];
		}
	}
	/**
	 * @param {string} string
	 */
	set getClass(string) {}
}

const charRESULT = document.querySelector("#charRESULT");
const userCHAR = new Character(null, null);
const btnCHAR = document.querySelector("#btnCHAR");
const userNPT = document.querySelector("#userNPT");
btnCHAR.addEventListener("click", showNAME);

function showNAME() {
	const charCLASS = userCHAR.getClass;
	const allINFO = `${handleNPT(userCHAR)}<br>${
		userCHAR.getRace
	}<br>${charCLASS}`;
	charRESULT.innerHTML = allINFO;

	return true;
}

/**
 *
 * @param {Character} character
 * @returns {string}
 */
function handleNPT(character) {
	switch (userNPT.value) {
		case "":
		case null:
			return character.getName;
		default:
			return handleName(userNPT.value);
	}

	return false;
}

/**
 *
 * @param {Array<string>} range is an array of possible values you want to use
 * @returns {number} random index from the array of possibilities, therefore, an random value
 */
function handleRandom(range) {
	const date = new Date();

	return Math.floor(Math.random(date) * range.length);
}

/**
 *
 * @param {string} string
 * @returns {string}
 */
function handleName(string) {
	userNPT.value = "";

	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
