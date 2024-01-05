/*
   썸네일을 누른다. -> 클릭이벤트
      해당 썸네일에 매칭되는 DOM 선택
      썸네일에 대한 click 이벤트 구문 작성
      앵커태그의 기본기능 작동 방지
      
   큰 이미지가 변한다.
      앵커의 href 속성값을 가져온다.
      큰 이미지의 src 속성값에 넣어준다.
*/

const $thmb1 = document.querySelector('section>.thmbs>ul>li:nth-child(1)>a');
const $thmb2 = document.querySelector('section>.thmbs>ul>li:nth-child(2)>a');
const $thmb3 = document.querySelector('section>.thmbs>ul>li:nth-child(3)>a');
const $thmb4 = document.querySelector('section>.thmbs>ul>li:nth-child(4)>a');
const $thmb5 = document.querySelector('section>.thmbs>ul>li:nth-child(5)>a');
const $thmb6 = document.querySelector('section>.thmbs>ul>li:nth-child(6)>a');
const $thmb7 = document.querySelector('section>.thmbs>ul>li:nth-child(7)>a');
const $thmb8 = document.querySelector('section>.thmbs>ul>li:nth-child(8)>a');
const $thmb9 = document.querySelector('section>.thmbs>ul>li:nth-child(9)>a');


$thmb1.addEventListener('click', function(evt){
   evt.preventDefault();
   const bigImg = $thmb1.getAttribute('href');
   document.getElementById('screen').setAttribute('src', bigImg);
});

//두번째 앵커태그에 대한 click 이벤트 구문
$thmb2.addEventListener('click', function(evt){
   evt.preventDefault();//앵커태그의 기본기능 작동 방지
   
   const bigImg = $thmb2.getAttribute('href');
   document.getElementById('screen').setAttribute('src', bigImg);
});


$thmb3.addEventListener('click',function(evt){
    evt.preventDefault();

    const bigImg = $thmb3.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
});

$thmb4.addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = $thmb4.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
});

$thmb5.addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = $thmb5.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
});

$thmb6.addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = $thmb6.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
});

$thmb7.addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = $thmb7.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
});

$thmb8.addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = $thmb8.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
});

$thmb9.addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = $thmb9.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
});


/*
const $img = document.querySelector('p>img');

const $li1 = document.querySelector('li:nth-child(1)');

$li1.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big1.jpg');
});


const $li2 = document.querySelector('li:nth-child(2)');

$li2.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big2.jpg');
});

const $li3 = document.querySelector('li:nth-child(3)');

$li3.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big3.jpg');
});

const $li4 = document.querySelector('li:nth-child(4)');

$li4.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big4.jpg');
});

const $li5 = document.querySelector('li:nth-child(5)');

$li5.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big5.jpg');
});

const $li6 = document.querySelector('li:nth-child(6)');

$li6.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big6.jpg');
});

const $li7 = document.querySelector('li:nth-child(7)');

$li7.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big7.jpg');
});

const $li8 = document.querySelector('li:nth-child(8)');

$li8.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big8.jpg');
});

const $li9 = document.querySelector('li:nth-child(9)');

$li9.addEventListener ('click',function(event){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big9.jpg');
});

*/


