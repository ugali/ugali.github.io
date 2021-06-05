const images = document.querySelectorAll('img[data-src]');

const loadImages = (image) =>{
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = ()=>{image.removeAttribute('data-src');};
};

const options = {
    rootMargin: "15px" ,
    threshold: 1
};

const observer = new IntersectionObserver((items,options)=>{
    items.forEach(entry =>{
    if (entry.isIntersecting){
        loadImages(entry.target);
        observer.unobserve(entry.target);
    }
    else{
        return;
    }
})
},options);

images.forEach((image)=>{
    observer.observe(image);
});
