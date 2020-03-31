
// slider-mini

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchTreshold: 20,
        touchMove: true,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: false,
        // rows: 1,
        // slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        asNavFor: ".sliderbig"

    }); 
});


// slider-big

$(document).ready(function(){
    $('.sliderbig').slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider"
    }); 
});


// активная вкладка страницы

$(function () {
    let location = window.location.href;
    let cur_url = '/' + location.split('/').pop();
 
    $('.menu_btn li').each(function () {
        let link = $(this).find('a').attr('href');
 console.log(location)

        if (cur_url == link) {
            $(this).addClass('current');
        }
    }); 
});


// активная карточка при hover

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
	

// кнопки-сетчик товаров
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


// // number-pages без комменариев

// document.querySelector('.btns-pages').addEventListener('click', e => {
//   const { target } = e;
//   const targetList = target.classList;
//   const allNumPages = [ ...document.querySelectorAll('.num-page')];
//   const activePageNumber = allNumPages.findIndex(i => i.classList.contains('num-active'));

//   switch(true) {
//     case targetList.contains('btn-left'): return activePageNumber && setNum(-1, true);
//     case targetList.contains('btn-right'): return (activePageNumber - allNumPages.length + 1) && setNum(1, true);
//     case targetList.contains('num-page'): return setNum(target.innerHTML);
//   }
  
//   function setNum(num, direction = null) {
//     allNumPages[activePageNumber].classList.remove('num-active');
//     (allNumPages[direction === null ? target.innerHTML - 1 : activePageNumber + num]).classList.add('num-active') ;
//   }
// });  



document.querySelector('.btns-pages').addEventListener('click', e => { 
 //вешаем один обработчик события клика на весь блок
  const { target } = e;  // цель, на которую мы кликнули
  const targetClassList = target.classList;  // массив классов цели, на которую мы кликнули
  const allNumPages = [ ...document.querySelectorAll('.num-page')];  // массив всех нумерованых блоков (блоки с классом .num-page), оператор '...' здесь не просто так
  const activePageNumber = allNumPages.findIndex(i => i.classList.contains('num-active'));  // номер (индекс) ранее выбранной страницы
console.log((activePageNumber - allNumPages.length + 1));
  switch(true) {  // этот оператор смотрит на какую кнопку мы кликнули
    case targetClassList.contains('btn-left'): return activePageNumber && setNum(-1, true);  // если кликнули на кнопку влево
    case targetClassList.contains('btn-right'): return (activePageNumber - allNumPages.length + 1) && setNum(1, true);  // если кликнули на кнопку вправо
    case targetClassList.contains('num-page'): return setNum(target.innerHTML);  // если кликнули прямо на число
  }
  
  function setNum(num, direction = null) {  // функция, которая задает выбранную страницу. параметр num - какую цифру мы выбрали (если мы нажали на цифру). параметр direction - направление стрелки, которую мы выбрали (если мы нажали на стрелку)
    allNumPages[activePageNumber].classList.remove('num-active'); // убирает класс .num-active с ранее выбранной страницы
    // здесь самый сок
    // если в вызываемой функции указан аргумент direction (он true или false), то берем индекс ранее выбранной цифры и плюсуем/минусуем 1, чтобы активировать предыдущую/следующую цифру
    // плюсовать или минусовать указывает аргумент num, который равен -1 либо 1
    // если в вызываемой функции не указан аргумен direction (он равен null) - значит мы кликнули прямо на число. берем содержимое выбранной цифры (через innerHTML) и по полученому индексу делаем элемент активным
    (allNumPages[direction === null ? target.innerHTML - 1 : activePageNumber + num]).classList.add('num-active') ;
  }

});

