var rooms = [
    [
        'коридор',
        'Перед тобой дверь в столовую и дверь в аудиторию. Куда пойдешь?',
        ['налево', 'направо'],
        [1, 2],
        null
    ], [
        'столовка',
        'Ты обожрался. Хочешь ещё поесть, или пойдешь учиться?',
        ['да', 'нет', 'хочуучиться!'],
        [1, 1, 0],
        1
    ],//  , 'военкомат'
    ['аудитория',
    'Ты правда собираешься учится?Может лучше в туалет сходишь?',
    ['да','нет','хочувкоридор'],
    [3,3,1],
    null
    ],
    ['туалет',
    'Облегчился? Теперь ты в коридоре куда пойдешь?',
    ['в аудиторию','в армию'],
    [2,5],
    null
    ]
];
var step = 0;
document.getElementById('location').innerHTML = rooms[0][0];
document.getElementById('Result').innerHTML = rooms[0][0];
function stepTo () {
    if (step === null) {
        return;
    }
    var room = rooms[step];
    if (!room) {
        return;
    }
    var answer = prompt(room[1]);
    document.getElementById("inp").value= '';
    if (!answer) {
        return;
    }
    answer = answer.toLowerCase().replace(' ', '');
    var isWayNotFound = true;
    for (var i = 0; i < room[2].length; i++) {
        if (answer === room[2][i]) {
            step = room[3][i];
            isWayNotFound = false;
            break;
        }
    }
   // document.
    if (isWayNotFound) {
        step = room[4];
    }
    printRoominfo();
}
function printRoominfo(){
        if (step !== null && rooms[step]){
            //название комнаты
document.getElementById('location'),innerHTML = rooms[step][0];
//вывод выходов из комнаты

var exist = [];
var isNameUniq= false;
for (var i=0;i < room[3].length ;i++)
var isNameUniq= false;
    //for (var j=0;j<exist.length;j++){
       // if (exist[j] === rooms[]){}
//    }
exist.push(rooms[room[3][i]][0]);
        }
    }

    var  stepToButton= document.getElementById('stepTo');
    stepToButton.addEventListener('click', stepTo);