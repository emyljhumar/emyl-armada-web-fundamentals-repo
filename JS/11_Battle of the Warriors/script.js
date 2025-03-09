// Battle of the warriors
const warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 12,
    attack: function () {
        return Math.floor(Math.random() * (warrior1.strength + 1));
    }
};

const warrior2 = {
    name: "Zeus",
    hp: 100,
    strength: 10,
    attack: function () {
        return Math.floor(Math.random() * (warrior2.strength + 1));
    }
};


for (let round = 1; round <= 10; round++) {
    console.log(`\nRound ${round} 🔥`);

    // Thor attacks Zeus
    let damage = warrior1.attack();
    warrior2.hp -= damage;
    console.log(`${warrior1.name} attacks ${warrior2.name} for ${damage} damage!`);
    console.log(`${warrior2.name} has ${warrior2.hp} HP left.`);

    if (warrior2.hp === 0) break;

    // Zeus attacks Thor
    damage = warrior2.attack();
    warrior1.hp -= damage;
    console.log(`${warrior2.name} attacks ${warrior1.name} for ${damage} damage!`);
    console.log(`${warrior1.name} has ${warrior1.hp} HP left.`);

    if (warrior1.hp === 0) break;
}

// Determine the winner
console.log("\nBattle Over! ");
if (warrior1.hp > warrior2.hp) {
    console.log(`${warrior1.name} is victorious! 🎉`);
} else if (warrior2.hp > warrior1.hp) {
    console.log(`${warrior2.name} wins the battle! 🏆`);
} else {
    console.log("It's a draw! 🤝");
}