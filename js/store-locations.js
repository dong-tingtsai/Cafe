// 全部地區
document.querySelector('.active').addEventListener('click',function(){

    let store = document.querySelectorAll('.store-card');
    for(let i = 0 ; i < store.length ; i++){
        store[i].style.display = 'block';
    }
    
  })



  // 北部篩選
document.querySelector('.north-tab').addEventListener('click',function(){

    document.querySelector('.central').style.display = 'none';

    south = document.querySelectorAll('.south');
    for(let i = 0 ; i < south.length ; i++){
        south[i].style.display = 'none';
    }

    document.querySelector('.east').style.display = 'none';

    north = document.querySelectorAll('.north');
    for(let i = 0 ; i < north.length ; i++){
        north[i].style.display = 'block';
    }

})


  // 中部篩選
  document.querySelector('.central-tab').addEventListener('click',function(){

    north = document.querySelectorAll('.north');
    for(let i = 0 ; i < north.length ; i++){
        north[i].style.display = 'none';
    }

    south = document.querySelectorAll('.south');
    for(let i = 0 ; i < south.length ; i++){
        south[i].style.display = 'none';
    }

    let east = document.querySelector('.east');
    east.style.display = 'none';

    let central = document.querySelector('.central');
    central.style.display = 'block';

})


  // 南部篩選
  document.querySelector('.south-tab').addEventListener('click',function(){

    north = document.querySelectorAll('.north');
    for(let i = 0 ; i < north.length ; i++){
        north[i].style.display = 'none';
    }

    let central = document.querySelector('.central');
    central.style.display = 'none';

    let east = document.querySelector('.east');
    east.style.display = 'none';

    south = document.querySelectorAll('.south');
    for(let i = 0 ; i < south.length ; i++){
        south[i].style.display = 'block';
    }

})


  // 東部篩選
  document.querySelector('.east-tab').addEventListener('click',function(){

    north = document.querySelectorAll('.north');
    for(let i = 0 ; i < south.length ; i++){
        north[i].style.display = 'none';
    }

    let central = document.querySelector('.central');
    central.style.display = 'none';

    south = document.querySelectorAll('.south');
    for(let i = 0 ; i < south.length ; i++){
        south[i].style.display = 'none';
    }

    let east = document.querySelector('.east');
    east.style.display = 'block';

})


var buttons = document.querySelectorAll('.store-tab');

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



