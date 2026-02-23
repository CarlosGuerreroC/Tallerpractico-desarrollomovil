/*
This function is for data entry 
*/
function Enterplayers(player1, player2) {
    player1 = prompt("Player 1: Enter Name");
    player2 = prompt("Player 2: Enter Name");
    return { player1, player2 };
}
/*
This function is to validate that the user does not 
enter a number as a name.
*/
function Validate(name) {
    const lettersonly = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return lettersonly.test(name);
}
const save = Enterplayers();

const validPlayer1 = Validate(save.player1);
const validPlayer2 = Validate(save.player2);

if (!validPlayer1 || !validPlayer2) {
    alert("Numbers are not allowed as names");
} else {
    alert("Excellet");
    alert(`Welcome  ${save.player1} and ${save.player2}`);
}
const player1 = {
    name1: save.player1,
    health: 100,
    hasattacked: false
};

const player2 = {
    name1: save.player2,
    health: 100,
    hasattacked: false
};
/*Simple Function 
1. This attack function
2. Each attacker has 1 attack opportunities
*/
function Attack(attacker, target) {
    if (attacker.hasattacked) {
        alert(`${attacker.name1} has already attacked`);
        return;
    }
    const damage = 20;
    target.health -= damage;
    attacker.hasattacked = true;

    alert(`${attacker.name1} attacks ${target.name1}`);
    alert(`${target.name1} health: ${target.health}%`);
}
// This function is to reset the chances for each round
function ResetTurn(player) {
    player.hasattacked = false;
}
/*
This function is so that when one of the players reaches 0 health, 
one loses and the other obviously wins.
 */
function Startbatte(p1, p2) {
    while (p1.health > 0 && p2.health > 0) {
        //player1 turn
        ResetTurn(p1);
        Attack(p1, p2);
        if (p2.health <= 0) break;

        //player2 turn
        ResetTurn(p2);
        Attack(p2, p1);
    }
    if (p1.health <= 0) {
        alert(`${p1.name1} has died. ${p2.name1} wins!`)
    } else {
        alert(`${p2.name1} has died. ${p1.name1} wins!`)
    }
}
Startbatte(player1, player2);
/*Arrow type function
1. 
*/
const Cure = () => {
    return
}
/*
1. Defend function
*/
const Defend = () => { }

