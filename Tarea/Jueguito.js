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
    const life = 100;
    const hasattacked = ;
}
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

