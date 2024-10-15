const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click",function(){
          menuBar.classList.toggle("active")
          document.querySelector(".menu-items").classList.toggle("active");
})
// menu
const menuTitle= document.querySelector(".menu-title");
menuTitle.addEventListener("click",function(x){
         if(x.target.classList.contains("menu-button")){
            const Target =x.target.getAttribute("data-title");
           menuTitle.querySelector(".active").classList.remove("active");
           x.target.classList.add("active");
          
           const menuItem = document.querySelector(".menu");
           menuItem.querySelector(".menu-item-content.active").classList.remove("active");
           menuItem.querySelector(Target).classList.add("active");
         }
})
let index = 0;

function changeImage() {
  const imgs = ["image/about.png","image/about3.jpg", "image/about2.jpg", "image/about5.jpg", "image/about4.jpeg"];
  const imgElement = document.getElementById('img-main');
  imgElement.src = imgs[index];
  index++;
  if (index == imgs.length) {
    index = 0;
  }
}
setInterval(changeImage, 3000);

//select product element
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu-item a, .btn');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
});
