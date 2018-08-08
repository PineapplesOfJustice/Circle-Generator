var namespace = "http://www.w3.org/2000/svg"

// Beneficial Code

document.addEventListener('keypress', restart);

//press space to restart
function restart(){
  var s = event.keyCode;
  // spacebar
  if(s == 32){
    createRandomScene();
  }
}

// end of beneficial codeobject
    makeRect(0,0,200,110,"white");
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene(){
  makeRect(0,0,200,110,"white");
  makeRect(0,0,200,100,"deepskyblue",0.1)
  makeRect(0,96,200,13,"green",0.8);
  makePolygon("-10,70,18,100,30,70,65,85,65,55,110,53,73,25,120,12,70,-10,0,0,0,100","orange");
  makeCircle(25,25,40,"yellow");
  makeRect(150,70,15,26,"#4B3621");
  makeEllipse(157,60,23,14,"green");
  makeEllipse(157,35,17,24,"green");

// extra    
  var object = Math.random();
  if(object >0.6){
    makeCircle(155,30,3,"orange",0.8);
    makeLine(155,28,155,25,"#6C2E1F",0.8);
    makeCircle(170,63,3,"orange",0.8);
    makeLine(170,61,170,58,"#6C2E1F",0.8);
    makeCircle(145,64,3,"orange",0.8);
    makeLine(145,62,145,59,"#6C2E1F",0.8);
   }
  if( object > 0.05){
    makeLine(140,97,139,88,"forestgreen");
    makeCircle(139,88,2,"yellow");
    makeCircle(139.2,85,1.5,"#8E4585");
    makeCircle(142,87,1.5,"#8E4585");
    makeCircle(136.5,87,1.5,"#8E4585");
    makeCircle(137.7,90.5,1.5,"#8E4585");
    makeCircle(141.2,90.5,1.5,"#8E4585");

    makeLine(170.4,97,171,88,"forestgreen");
    makeCircle(171,88,2,"yellow");
    makeCircle(171.2,85,1.5,"#FF4500");
    makeCircle(174,87,1.5,"#FF4500");
    makeCircle(168.5,87,1.5,"#FF4500");
    makeCircle(169.7,90.5,1.5,"#FF4500");
    makeCircle(173.2,90.5,1.5,"#FF4500");

  }        
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene(){ 
  makeRect(0,0,200,110,"white");
  makeImage("Images/Icon/Yellow Sun.png",20,0,40,40);
  makeRect(0,0,200,110,"#FF3800",0.1);
  makeRect(0,96,200,13,"yellow",0.8);  
    
  var css= Math.random();  
  if(css>0.7){
    makePolygon("5,100,45,38,85,100","yellow");
    makePolyline("5,100,45,38,85,100,5,100","#6F4242",0.8,0.3);
    makePolygon("25,69,65,69,45,100","#6F4242",0.2);
  }
    
  makeCircle(160,60,30,"blue",0.5);
  makeEllipse(110,35,30,30,"purple",0.8);
  makeEllipse(70,70,30,30,"pink",0.9);
  makeLine(110,100,150,90,"green");
  makeLine(110,100,113,68.2,"green");
  makeLine(110,100,95,90,"green");
    
  if(css>0.3){
    makeRect(42,32,24,5,"white");
    makeEllipse(42,31,8,6,"white");
    makeEllipse(65,30,6,7,"white");
    makeEllipse(52,25,8,12,"white");
    
    makeRect(-5,48,24,5,"white");
    makeEllipse(-5,47,8,6,"white");
    makeEllipse(19,47,8.4,6,"white");
    makeEllipse(6,41,9,9,"white");
        
    makeRect(172,22,26,5,"white");
    makeEllipse(172,21,11,6,"white");
    makeEllipse(195.1,20,8.7,7,"white");
    makeEllipse(182,15,10,11,"white");
    
    makeLine(20,104,15,94,"green",1);
    makeLine(20,104,20,94,"green",1);
    makeLine(20,104,25,94,"green",1);
    
    makeLine(60,105,58,101.4,"green",0.58);
    makeLine(60,105,59.5,100.4,"green",0.58);
    makeLine(60,105,61,101.4,"green",0.58);
    
    makeLine(105,108,103.8,104.5,"green",0.3);
    makeLine(105,108,104.7,103.5,"green",0.3);
    makeLine(105,108,106,104.5,"green",0.3);
    
    makeLine(152,103,150,97,"green",0.7);
    makeLine(152,103,151.7,96,"green",0.7);
    makeLine(152,103,154,97,"green",0.7);
    
    makeLine(182,107,178,98,"green",0.9);
    makeLine(182,107,181.7,96,"green",0.9);
    makeLine(182,107,186,98,"green",0.9);
  }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene(){
  makeRect(0,0,200,110,"white");
  makeRect(0,0,200,110,"yellow",0.3);
  makeRect(0,96,200,14,"purple",0.7);
  var lear = makeEllipse(120,42,15,25,"pink");
  lear.setAttribute("transform", "rotate(" + 145 + " 120 42)");
  var lr = makeEllipse(120,42,7,17,"white",0.5);
  lr.setAttribute("transform", "rotate(" + 145 + " 120 42)");
    
  var rear = makeEllipse(160,42,15,25,"pink");
  rear.setAttribute("transform", "rotate(" + 35 + " 160 42)");
  var rr = makeEllipse(160,42,7,17,"white",0.5);
  rr.setAttribute("transform", "rotate(" + 35 + " 160 42)");
    
  var com = makeCircle(140,60,40,"green");
  makeEllipse(140,84,8,4);
  makeEllipse(140,75,20,10,"pink");
  makeEllipse(128,50,7,16,"white");
  makeEllipse(152,50,7,16,"white");
  makeEllipse(129,57,4,7,"black");
  makeEllipse(151,57,4,7,"black");
  makeEllipse(136,75,2,4,"#DC143C");
  makeEllipse(144,75,2,4,"#DC143C");
  
  var box = makeRect(11,13,60,40, "red");
  box.setAttribute("rx",10);
  box.setAttribute("ry",10);
  box.setAttribute("fill-opacity",0.1);
  box.setAttribute("stroke","blue");
  box.setAttribute("stroke-opacity",0.8);
  box.setAttribute("stroke-width",2);
  box.setAttribute("stroke-dasharray","22,1,3,3");
  var derp= makePolyline("95,65,85,45,75,65","blue");
  derp.setAttribute("transform", "rotate(" + 120 + " 85 55)");    
  derp.setAttribute("stroke-width",1.5);
  derp.setAttribute("stroke-dasharray","18,3,3,3");
  derp.setAttribute("stroke-linecap","round");
  var mini = Math.random();
  if(mini>0.7){
    makeText("¡Hola, me ",24,29,8,"Architects Daughter","green");
    makeText("llamo Adrian!",18,43,8,"Architects Daughter","green");
  }
  else if(mini>0.5){
    makeText("¡Me gusta ",24,29,8,"Architects Daughter","green");
    makeText("bistec con arroz!",16,43,6,"Architects Daughter","green");
  }
  else if(mini>0.3){
    makeText("¡Yo tengo una ",18,29,8,"Architects Daughter","green");
    makeText("mascota humana!",14,43,7,"Architects Daughter","green");
  }
  else if(mini>0.1){
    makeText("I no speak",22,27,8,"Architects Daughter","green");
    makeText(" English!",18,43,15,"Architects Daughter","green");
  }
  else{ 
    com.setAttribute("fill","#FF91AF");
    makeText("¿...?",25,41,24,"Architects Daughter","green");
  }
}

var t=0;
// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
  // Generate a random number between 0 and 1, and store it in a variable.
  var art = Math.random();
  // If the number is less than 0.33, call the function to create your first scene.
  if(art<0.33 && t!=1){
    createFirstScene();   
    t=1;
  }
  else if(art<0.67 && t!=2){   
    createSecondScene();
    // Else, if the number is less than 0.67, call the function to create your second scene.
    t=2;
  }  
  // Else, call the function to create your third scene.
  else if(t!=3){
    createThirdScene();   
    t=3;
  }
  else{
    createRandomScene();   
  }  
}

// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}