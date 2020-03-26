$(function () {
    let location = window.location.href;
    let cur_url = '/' + location.split('/').pop();
 
    $('.menu_btn li').each(function () {
        let link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).addClass('current');
        }
    });
});

let productionCard = document.querySelectorAll ('.production__card'),
	productionButtons = document.querySelectorAll ('.production__buttons');

	for(let i = 0; i < productionCard.length; i++){

		productionCard[i].addEventListener('mouseenter', function(){
			productionButtons[i].style.display = 'flex';
		})	
		productionCard[i].addEventListener('mouseleave', function(){
			productionButtons[i].style.display = '';
		});
	};


// let quantum = document.querySelector('.quantum'),
// 	btnMinus = document.querySelector('.btn-minus'),
// 	btnPlus = document.querySelector('.btn-plus'),
// 	j = 0;

// 		btnMinus.addEventListener('click', function(){
// 			if(j >= 0){
// 				quantum.value = j--;
// 			};
// 		});
// 		btnPlus.addEventListener('click', function(){
// 			quantum.value = j++;
// 	});		


$('.btn-minus').on('click', function(e) {
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());
 
    if (value >= 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});

$('.btn-plus').on('click', function(e) {
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());
 
    if (value <= 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});