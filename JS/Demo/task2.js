const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
 let currentIndex =0;
 function updateImage(){
    document.getElementById('slider').src = images[currentIndex];

 }

 function nextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
 }
 function prevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
     updateImage();
 }