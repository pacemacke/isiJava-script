var rooms = [
    ['коридор',
     'Ты в коридоре, куда пойдешь(столовка, аудитория,туалет,военкомат)?',
     ['столовка','аудитория','туалет','военкомат'],
     [1,2,3,4],
     null
      ],
    ['столовка',
    'Ты обожрался хочешь еще?',
    ['да','нет','хочу учиться'],
    [1,1,0],
    1
      ],
    [
        'аудитория',
      'ты в аудитории, слушаешь пару. Заснуть?',
      ['да','нет','хочу учиться'],
      [1,1,2],
      'Ты выслушал пару, но ничего не понял-1,5 часа :(.выходишь из аудитории.Куда теперь? '
      ],
    ['туалет'],
    ['военкомат']
];
var step = 0;
while (1) {
    if (step === null){
        break;
        }
}
var room =rooms[step];
if (!room) {
    break;
}
for(j=1;j<5;j++){
    var answer= prompt(room[j]);
if (!answer) {
    continue;
}
}
answer=answer.toLowerCase().replace(' ','');
var isWayNotFound = true;
for (var i=0;i<room[2].length; i++){
    if (answer === room[2][i]){
        step = room[3][i];
        isWayNotFound = false;
        break;
    }
}
if (isWayNotFound) {
    step= rooms[2][1];
}
var isWayNotFound = true;
for (var i=0;i<room[2].length; i++){
    if (answer === room[2][i]){
        step = room[3][i];
        isWayNotFound = false;
        break;
    }
}
