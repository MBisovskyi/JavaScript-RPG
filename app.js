// Variables

let lowkickAttackMethod = {
  name: "Lowkick",
  attackPower: 200,
};

let swordAttackMethod = {
  name: "Sword",
  attackPower: 400,
};

let uppercutAttackMethod = {
  name: "Uppercut",
  attackPower: 300,
};

let herculesCharacter = {
  name: "Hercules",
  health: 1000,
  attackPower: 0,
  attackMethod: [lowkickAttackMethod, swordAttackMethod, uppercutAttackMethod],
};

let nemeanLion = {
  name: "Nemean Lion",
  health: 390,
  attackPower: enemyRandomAttackPower(101, 50),
  attackName: "claws swipe",
};

let lernaeanHydra = {
  name: "Lernaean Hydra",
  health: 450,
  attackPower: enemyRandomAttackPower(51, 50),
  attackName: "tail swipe",
};

let cerberus = {
  name: "Cerberus",
  health: 420,
  attackPower: enemyRandomAttackPower(151, 50),
  attackName: "one of the heads bite",
};

// Story messages

let mainStoryOne =
  "You are Hercules, the greatest of the Greek Heroes! You have been tasked by King Eurystheus to slay the vicious Nemean Lion, defeat the impossible nine-headed Lernaean Hydra, and capture the guard dog of the underworld—Cerberus";

let mainStoryTwo =
  "Hercules went out of the Eurystheus Castle without any hesitation to meet his fate. Great adventure was waiting for him, but before that Hercules had to learn some new skills to defeat his enemies!";

let mainStoryThree = `Hercules went to meet his coach to ask for help in gaining some new skills, and coach taught him how to attack with "${lowkickAttackMethod.name}" and "${uppercutAttackMethod.name}"!`;

let mainStoryFour = `After some training with coach - Hercules went to the closest blacksmith to find a weapon that can be useful. It didn't take too long to make a decision, he picked up a ${swordAttackMethod.name}.`;

let fightWithLionStory = `Hercules came to the place which King Eurystheus told him where he will find ${nemeanLion.name} to defeat him. Lion made a trap for a visitor and attacked Hercules immediately!`;
// Functions

function promptHerculesAttackMethod() {
  let userInput = prompt(
    `1. ${lowkickAttackMethod.name}\n2. ${swordAttackMethod.name}\n3. ${uppercutAttackMethod.name}`
  );
  return userInput;
}

function herculesAttackMethod(userInput) {
  let attackMethodName = herculesCharacter.attackMethod[userInput - 1];
  herculesCharacter.attackPower =
    herculesCharacter.attackMethod[userInput - 1].attackPower;
  return attackMethodName;
}

function herculesAttack(enemy) {
  enemy.health = enemy.health - herculesCharacter.attackPower;
  return enemy.health;
}

function enemyRandomAttackPower(min, max) {
  let attackPower = Math.floor(Math.random() * min) + max;
  return attackPower;
}

function lionAttack(hercules) {
  hercules.health = hercules.health - nemeanLion.attackPower;
  return hercules.health;
}

function hydraAttack(hercules) {
  hercules.health = hercules.health - lernaeanHydra.attackPower;
  return hercules.health;
}

function cerberusAttack(hercules) {
  hercules.health = hercules.health - cerberus.attackPower;
  return hercules.health;
}

function battleWinner(hercules, enemy) {
  if (hercules.health <= 0) {
    let winner = enemy.name;
    return winner;
  } else if (enemy.health <= 0) {
    let winner = hercules.name;
    return winner;
  }
}

function lionBattlePhase() {
  let isBattle = true;
  while (isBattle) {
    if (herculesCharacter.health <= 0 || nemeanLion.health <= 0) {
      let winner = battleWinner(herculesCharacter, nemeanLion);
      alert(`This battle is over! ${winner} is a winner!`);
      isBattle = false;
    }
    if (herculesCharacter.health > 0 && nemeanLion.health > 0) {
      herculesCharacter.health = lionAttack(herculesCharacter);
      console.log(
        `${nemeanLion.name} attacked ${herculesCharacter.name} by ${nemeanLion.attackName}!`
      );
    }
    if (nemeanLion.health > 0 && herculesCharacter.health > 0) {
      let userInput = promptHerculesAttackMethod();
      let attackMethod = herculesAttackMethod(userInput);
      nemeanLion.health = herculesAttack(nemeanLion);
      console.log(
        `${herculesCharacter.name} attacked ${nemeanLion.name} by ${attackMethod.name}`
      );
    }
  }
}

function runGame() {
  alert(nemeanLion.attackPower);
  alert(lernaeanHydra.attackPower);
  alert(cerberus.attackPower);
  //   alert(mainStoryOne);
  //   alert(mainStoryTwo);
  //   alert(mainStoryThree);
  //   alert(mainStoryFour);
  //   alert(fightWithLionStory);
  lionBattlePhase();

  alert(herculesCharacter.health);
}

// Run Game!
runGame();
