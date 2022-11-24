
var AllImages=Array.from(document.querySelectorAll("img"))

var LeftArrow= document.querySelector(".fa-arrow-left")
var rightArrow= document.querySelector(".fa-arrow-right")
var closeIcon =document.querySelector(".fa-xmark ")
var  currentindex;
var innerDiv ;
var layer = document.querySelector(".layer")

for (var i=0 ; i<AllImages.length;i++){

    AllImages[i].addEventListener("click",function(e){
    
    

   
    layer.classList.remove("d-none")

    currentindex  = AllImages.indexOf( e.target ) 
    

    var currentImageSrc= e.target.getAttribute("src")
    innerDiv  = document.querySelector(".innerdiv")
    innerDiv.style.backgroundImage= `url(${currentImageSrc})`
    })


}









LeftArrow.addEventListener("click",getPerviousImage)
rightArrow.addEventListener("click",getNextImage)
closeIcon.addEventListener("click",CloseImage)

function getNextImage(){


    currentindex++;

    if (currentindex==AllImages.length){
        currentindex=0
    }
    var nextImageSrc=  AllImages[currentindex].getAttribute("src")
    
    innerDiv.style.backgroundImage= `url(${ nextImageSrc })`
 
}


function getPerviousImage(){

    currentindex--;

    if (currentindex==0){
        currentindex= AllImages.length -1
    }
    
    var pervImageSrc=  AllImages[currentindex].getAttribute("src");
    
    innerDiv.style.backgroundImage= `url(${pervImageSrc})`

}

function CloseImage(){
    layer.classList.add("d-none")




}




document.addEventListener("keydown",function(e){

  console.log(e)
    if (e.code=="ArrowRight"){
        getNextImage()
    }
    else if  (e.code=="ArrowLeft"){
        getNextImage()
    }
    else if (e.code=="Escape"){
        CloseImage()
    }
    
    else if (e.code=="layer"){
        CloseImage()
    }
   
})


layer.addEventListener("click",function(e){
  if (e.target == layer){
    CloseImage()
  }
})




