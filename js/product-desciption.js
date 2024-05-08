// 全部商品
document.querySelector('.active').addEventListener('click',function(){
  let product = document.querySelectorAll('.product-block');
  for(let i = 0 ; i < product.length ; i++){
    product[i].style.display = 'block';
  }
})


// 咖啡篩選
document.querySelector('.coffee-tab').addEventListener('click',function(){

    let dessert = document.querySelector('.dessert-block');
    dessert.style.display = 'none';
  
    let tea = document.querySelector('.tea-block');
    tea.style.display = 'none';

    let coffee = document.querySelector('.coffee-block');
    coffee.style.display = 'block';

})


// 甜點篩選
document.querySelector('.dessert-tab').addEventListener('click',function(){

  let coffee = document.querySelector('.coffee-block');
  coffee.style.display = 'none';

  let tea = document.querySelector('.tea-block');
  tea.style.display = 'none';

  let dessert = document.querySelector('.dessert-block');
  dessert.style.display = 'block';

})


// 茶類飲品篩選
document.querySelector('.tea-tab').addEventListener('click',function(){

  let coffee = document.querySelector('.coffee-block');
  coffee.style.display = 'none';

  let dessert = document.querySelector('.dessert-block');
  dessert.style.display = 'none';

  let tea = document.querySelector('.tea-block');
  tea.style.display = 'block';
})


var buttons = document.querySelectorAll('.product-tab');

buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.style.backgroundColor = 'white';
            btn.style.color = '#714B23';
        });
        button.style.backgroundColor = '#714B23';
        button.style.color = 'white';
    });
});



/************coffee************* */
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("product-card-coffee-app");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}



/************dessert************* */

let slideIndex_2 = 1;
showSlides_2(slideIndex_2);

// Next/previous controls
function plusSlides_2(b) {
  showSlides_2(slideIndex_2 += b);
}

// Thumbnail image controls
function currentSlide_2(b) {
  showSlides_2(slideIndex_2 = b);
}

function showSlides_2(b) {
  let j;
  let slides_2 = document.getElementsByClassName("product-card-dessert-app");
  if (b > slides_2.length) {slideIndex_2 = 1}
  if (b < 1) {slideIndex_2 = slides_2.length}
  for (j = 0; j < slides_2.length; j++) {
    slides_2[j].style.display = "none";
  }

  slides_2[slideIndex_2-1].style.display = "block";
}

/************tea************* */

let slideIndex_3 = 1;
showSlides_3(slideIndex_3);


function plusSlides_3(c) {
  showSlides_3(slideIndex_3 += c);
}


function currentSlide_3(c) {
  showSlides_3(slideIndex_3 = c);
}

function showSlides_3(c) {
  let k;
  let slides_3 = document.getElementsByClassName("product-card-tea-app");
  if (c > slides_3.length) {slideIndex_3 = 1}
  if (c < 1) {slideIndex_3 = slides_3.length}
  for (k = 0; k < slides_3.length; k++) {
    slides_3[k].style.display = "none";
  }

  slides_3[slideIndex_3-1].style.display = "block";
}

