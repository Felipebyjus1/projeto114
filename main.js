var corFiltro = "";

function preload(){

}

function setup(){
    canvas = createCanvas(720, 560);
    canvas.position(135, 250);
    video = createCapture(VIDEO);
    video.hide();
    corFiltro = "";
}

function draw(){
    image(video, 0, 0, 720, 560);
    tint(corFiltro);
    fill("blue");
    stroke("blue");
    circle(40, 40, 70);
    circle(680, 40, 70);
    circle(40, 520, 70);
    circle(680, 520, 70);
    fill("green");
    stroke("green");
    rect(70, 40, 580, 20);
    rect(70, 520, 580, 20);
    rect(30, 70, 20, 420);
    rect(670, 70, 20, 420);
}

function tirarFoto(){
    save("foto.png");
}

function aplicarFiltro(){
    corFiltro = document.getElementById("CorFiltro").value;
    console.log(corFiltro);
}

