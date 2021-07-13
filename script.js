const list = document.querySelectorAll('.socialMediaIcons li');
const socialMedia = document.querySelector('.socialMedia');

list.forEach(items => {
    items.addEventListener('mouseenter', function(event){
        let color = event.target.getAttribute('data-color');
        socialMedia.style.backgroundColor = color;
    })
    items.addEventListener('mouseleave', function(event){
        socialMedia.style.backgroundColor = '#fff';
    });
})

VanillaTilt.init(document.querySelectorAll(".socialMediaIcons li a"), {
        max: 30,
        speed: 400,
        glare : true,
        "max-glare": 1,
})