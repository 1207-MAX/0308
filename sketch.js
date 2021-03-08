
let x=0;
function setup() 
{
  createCanvas(600, 600);
}

function draw() 
{ 
  //background(220);
  //noStroke();
  //若壓下滑鼠用筆刷1
  if(mouseIsPressed)
  {
    fill(mouseX,mouseY,150);
    rect(mouseX,mouseY,x,20+5*sin(x));
  }
  //若按下滑鼠 換成筆刷2
  else
  {
    fill(mouseX,mouseY,150);
    circle(mouseX,mouseY,x);
  }
  
  fill(mouseX,150,mouseY);
  stroke(255);
  //circle(mouseX,mouseY,x);
  //line(mouseX,mouseY,120+20*sin(x),x+100);
  //stroke(255)
  

   x=40
}
