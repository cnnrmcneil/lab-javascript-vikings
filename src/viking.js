// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
  this.name = name
}
receiveDamage(damage){
  this.health -= damage;
  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`
  }
  else return `${this.name} has died in act of combat`
}
battleCry(){
  return 'Odin Owns You All!'
}
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health-=damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
    else return "A Saxon has died in combat";
  }
}
// saxondamage <= 0 dasdsa : asdas
// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(vikingObj){
    this.vikingArmy.push(vikingObj)
  }
  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj)
  }
  vikingAttack(){
   let i = [Math.floor(Math.random()*this.saxonArmy.length)]
   let text = this.saxonArmy[i].receiveDamage(this.vikingArmy[0].strength)
   if (this.saxonArmy[i].health <= 0){
     this.saxonArmy.splice(i)
     return text
   }
   else return text
   
  }
  saxonAttack(){
    let i = [Math.floor(Math.random()*this.vikingArmy.length)]
    let text = this.vikingArmy[i].receiveDamage(this.saxonArmy[0].strength)
    if (this.vikingArmy[i].health <= 0){  
      this.vikingArmy.splice(i) 
      return text
    }
    else return text
    //return this.vikingArmy[i].receiveDamage(this.saxonArmy[0].strength)
  }
  showStatus(){
    if (this.saxonArmy.length <=0){
      return 'Vikings have won the war of the century!'
    }
    if (this.vikingArmy.length <=0){
      return 'Saxons have fought for their lives and survived another day...'
    }
    else return 'Vikings and Saxons are still in the thick of battle.'
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
