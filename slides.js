var _= require ('lodash');
var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array,3));
console.log(_);
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