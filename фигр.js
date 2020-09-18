var r=prompt('введи радиус R=')*1,x=prompt('введи x')*1,y=prompt('введи y')*1;
if (isNaN(x) || isNaN(y) || isNaN(r)) {
    alert('Введены нечисленные значения!!!');
}else {
        if(Math.sqrt(x*x+y*y)<=r){
        alert('Попал!!!');
        }else{
            alert('Промазал!!!!');
             }
      }
      
     /* */
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.Width="1000";
canvas.height="1000";

context.fillstyle = 'black';
context.fillRect(0,0,canvas.Width,canvas.height);
//var image = document.getElementById('source');
//vbiy
/*
context.beginPath();
context.strokeStyle='orange';
context.arc(canvas.Width/2,canvas.height/2,r, 1010, 10, 2*Math.PI,true);
context.fill();*/
//оси
context.beginPath();
context.strokeStyle='green';
context.moveTo(canvas.Width/2,0);
context.lineTo(canvas.Width/2,canvas.height);
context.moveTo(0,canvas.height/2);
context.lineTo(canvas.Width,canvas.height/2);
context.stroke();
//все дуги
context.beginPath();
context.strokeStyle='green';
context.arc(canvas.Width/2-r,canvas.height/2-r,r,Math.PI/2,0,true);
context.arc(canvas.Width/2+r,canvas.height/2-r,r,Math.PI/2,-Math.PI,false);
context.arc(canvas.Width/2+r,canvas.height/2+r,r,-Math.PI/2,Math.PI,true);
context.arc(canvas.Width/2-r,canvas.height/2+r,r,3*Math.PI/2,0,false);
context.arc(canvas.Width/2,canvas.height/2,r,0,2*Math.PI,false);
context.stroke();
//ромб
context.beginPath();
context.strokeStyle='green';
context.moveTo(canvas.Width/2,(canvas.height/2-r));
context.lineTo((canvas.Width/2+r),canvas.height/2);
context.lineTo(canvas.Width/2,(canvas.height/2+r));
context.lineTo((canvas.Width/2-r),canvas.height/2);
context.lineTo(canvas.Width/2,(canvas.height/2)-r);
context.stroke();

let отверстие = new Image();
отверстие.src ="изображение пулев.отвер.jpg";
отверстие.onload = function() {
context.drawImage(отверстие,canvas.Width/2+x, canvas.height/2-y, 10, 10);
};
 
