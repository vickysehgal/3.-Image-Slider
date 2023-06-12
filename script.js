const slider = document.querySelectorAll('.img');

let counter = 0;

slider.forEach((slider, index)=>{
    slider.style.left = `${index * 100}%`;
})

function prev(){
    counter--;
    slideImage();
}

function next(){
    counter++;
    slideImage();
}

function slideImage(){

    if(counter < 0){
        counter = slider.length-1;
    }else if(counter >= slider.length){
        counter = 0;
    }

    slider.forEach((slides)=>{
        slides.style.transform = `translateX(-${counter * 100}%)`;
    })
}