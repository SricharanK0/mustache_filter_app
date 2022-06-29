noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://th.bing.com/th/id/R.fecde39b22882110119130c7efe3a7bf?rik=CQE4ufA2sWvSgA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fMoustache-PNG-Clipart.png&ehk=jKkkMRvmYBHxT7Ww6tc0sf%2fOPXa4Y2yip7%2ftsPk8lX0%3d&risl=&pid=ImgRaw&r=0");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,35,25)
}
function take_snapshot(){
    save("clown_nose_selfie.jpg");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-16;
        noseY=results[0].pose.nose.y;
        console.log("Nose X="+noseX);
        console.log("Nose Y="+noseY);
    }
}