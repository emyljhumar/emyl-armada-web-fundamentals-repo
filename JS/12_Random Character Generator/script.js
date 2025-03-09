function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

class Character {
    constructor(name = getRandomElement(["Thorin", "Elara", "Zane", "Ivy", "Dante"])) {
        this.name = name;
        this.class = getRandomElement(["Warrior", "Mage", "Archer", "Healer", "Assassin"]);
        this.health = this.randomizeHealth();
        this.specialAbility = getRandomElement(["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"]);
    }


    randomizeHealth() {
        return Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    }

    
    battle(otherCharacter) {
        let damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        let previousHealth = otherCharacter.health;
        otherCharacter.health = Math.max(0, otherCharacter.health - damage);
        console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${previousHealth} to ${otherCharacter.health}.`);
    }
}


function generateCharacter(name) {
    return new Character(name);
}

function generateMultipleCharacters(x) {
    let characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(new Character());
    }
    return characters;
}

const char1 = generateCharacter();
const char2 = generateCharacter();
console.log(char1);
console.log(char2);


char1.battle(char2);

console.log(generateMultipleCharacters(3));
