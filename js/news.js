// 全部訊息
document.querySelector('.active').addEventListener('click',function(){
    let news_card = document.querySelectorAll('.news-card');
    for(let i = 0 ; i < news_card.length ; i++){
        news_card[i].style.display = 'flex';
    }
})


// 優惠活動篩選
document.querySelector('.discount').addEventListener('click',function(){
    let discount_none = document.querySelectorAll('.discount_none');
    for(let i = 0 ; i < discount_none.length ; i++){
        discount_none[i].style.display = 'none';
    }
    let limited_time_none = document.querySelectorAll('.limited_time_none');
    for(let i = 0 ; i< limited_time_none.length ; i++){
        limited_time_none[i].style.display = 'flex';
    }

})

//限時商品篩選
document.querySelector('.limited_time').addEventListener('click',function(){
    let limited_time_none = document.querySelectorAll('.limited_time_none');
    for(let i = 0 ; i < limited_time_none.length ; i++){
        limited_time_none[i].style.display = 'none';
    }
    let discount_none = document.querySelectorAll('.discount_none');
    for(let i = 0 ; i< discount_none.length ; i++){
        discount_none[i].style.display = 'flex';
    }
})


var buttons = document.querySelectorAll('.news-tab');

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

