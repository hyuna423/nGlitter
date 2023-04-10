const header = document.querySelector('header');

function scrollEvent(){
    document.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 100){
            header.classList.add("scroll_bar");
        }else{
            header.classList.remove("scroll_bar");
        }
    });
}

function init(){
    document.addEventListener("scroll", scrollEvent);
}

init();



/* 
let scrollTop = 0;

window.addEventListener('scroll', function () {
  scrollTop = document.documentElement.scrollTop;
  console.log("스크롤 값: " + scrollTop)
},false) */