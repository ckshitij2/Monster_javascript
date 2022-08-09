const ATTACK_VALUE = 10;

let ChosenMaxLife = 200;
let currMonsterHealth = ChosenMaxLife;
let currPlayerHealth = ChosenMaxLife;
adjustHealthBars(ChosenMaxLife);

function AttackHandler() {
  //window.alert("Attack Launched");
  const damage_to_monster = dealMonsterDamage(ATTACK_VALUE);
  const damage_toplayer = dealPlayerDamage(ATTACK_VALUE);

  currMonsterHealth -= damage_to_monster;
  currPlayerHealth -= damage_toplayer;
  console.log(currMonsterHealth, currPlayerHealth);
}

attackBtn.addEventListener("click", AttackHandler);
