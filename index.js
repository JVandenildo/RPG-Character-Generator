const charNames = [
	"Calabreso",
	"CNPJoto",
	"Bolo-fofo",
	"Descascado",
	"Rochoso",
];
const charRaces = ["Dwarf", "Elf", "Gnome", "Human", "Orc"];
const charClasses = ["Archer", "Mage", "Monk", "Rogue", "Warrior"];

class Character {
	/**
	 * @param {string} inputRace will receive the user input for character's name, otherwise a random value from charName
	 * @param {string} inputClass receives random value from charClasses
	 */
	constructor(inputRace, inputClass) {
		this._race = this.getRace;
		this._class = this.getClass;
		this._name = this.getName;
	}

	get getName() {
		return charNames[handleRandom(charNames)];
	}
	set getName(string) {}

	get getRace() {
		return charRaces[handleRandom(charRaces)];
	}
	set getRace(string) {}

	get getClass() {
		return charClasses[handleRandom(charClasses)];
	}
	set getClass(string) {}
}

const charRESULT = document.querySelector("#charRESULT");
const userCHAR = new Character("Wellington", "Warrior");
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
	const randomNumber = Math.floor(Math.random(date) * range.length);

	return randomNumber;
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
