
// Create your character
var Wonderwoman ='Storm';

if( Wonderwoman === 'Storm'){
    console.log('You are the one who will save us all');
}
else if (Wonderwoman === 'Captain Marvel'){
    console.log('You will be saved in another life');
}
else if (Wonderwoman === 'Black Widdow'){
    console.log('You are as strong as you look!');
}
else {
    console.log('Please try choosing your character ' + Wonderwoman);
};

console.log('You are ' + Wonderwoman)

// Your special ability is...

function Ability(){
    var option1 = Math.floor(Math.random()*4);
    var superpower =['FLYING', 'STRENGTH', 'SUPER HEARING', 'SUPER VISION'];
    var character=Wonderwoman + 's super power is ' + superpower[option1];
    console.log(character);
}

Ability();

// YOUR TASK - Save the dragon egg
// STEP 1: JUMP INTO THE WATER

var choice = 'Jump in the water';
if (choice='Jump in the water'){
    console.log('You have successfuly enter the dragon world');
}
else if (choice === 'fall on the ground'){
    console.log('You did not enter the dragon world')
}

// STEP 2: STEAL A WEAPON
function weapon(){
    var weaponrandom =Math.floor(Math.random()*6);
    var type = ['gun','knife','sword','fork','hammer','brick'];
    var weapontype = 'You have stolen a ' + type[weaponrandom] + ' to use in fighting the dragon guard';
    console.log(weapontype);
}

weapon();

// STEP 3: DO YOUR TASK
var succeed = 'Slay the dragon guard'
if (succeed ==='Slay the dragon guard'){
    console.log('You did it, now go collect your egg');
}
else {
    console.log('You have been caught by the guard and been teleported back home');
};

// STEP 4: TAKE YOUR EGG
var egg='small';

switch (egg){
    case 'small':
    console.log('You have chosen the smallest and rare egg with the most power');
    break;

    case 'medium':
    console.log('You have chosen the average egg that has the most magical force');
    break;

    case 'big':
    console.log('You have chosen the biggest and with the most money');
    break;

    default:
    console.log('Be brave');
}

// go home

var home='Teleporting home. Thank you '+ Wonderwoman +'.';
console.log(home);
