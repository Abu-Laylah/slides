let img = document.getElementById('img');
let imgArray =['IMG/Koala.jpg','IMG/Lighthouse.jpg','IMG/Penguins.jpg','IMG/Tulips.jpg']
let imgIndex = 0;
function slideShow(){
    img.setAttribute('src',imgArray[imgIndex])
    imgIndex++;

    if(imgIndex >= imgArray.length){
        imgIndex=0
    }
}
setInterval(slideShow,800)