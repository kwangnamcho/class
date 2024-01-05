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

//9개의 a태그 (DOM)을 선택하여 배열 형식으로 저장 (배열은 아님) 
const $thmbs = document.querySelectorAll('section>.thmbs>ul>li>a');
console.log('$thmbs =', $thmbs);
console.log(Array.isArray($thmbs));//false

$thmbs[0].addEventListener('click', function(evt){
   evt.preventDefault();

   //이벤트 구문 안에서 this의 의미 -> Current HTML Element
   //이번에 00한 바로 그 녀석
    console.log('this =', this)
   
   const bigImg = this.getAttribute('href');
   document.getElementById('screen').setAttribute('src', bigImg);

   const altImg = this.firstElementChild.getAttribute('alt');
   console.log('altImg =', altImg);
   document.getElementById('screen').setAttribute('alt', altImg);
});

//두번째 앵커태그에 대한 click 이벤트 구문
$thmbs[1].addEventListener('click', function(evt){
   evt.preventDefault();//앵커태그의 기본기능 작동 방지
   const bigImg = this.getAttribute('href');
   document.getElementById('screen').setAttribute('src', bigImg);
   const altImg = this.firstElementChild.getAttribute('alt');
   console.log('altImg =', altImg);
   document.getElementById('screen').setAttribute('alt', altImg);
});


$thmbs[2].addEventListener('click',function(evt){
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
    const altImg = this.firstElementChild.getAttribute('alt');
    console.log('altImg =', altImg);
    document.getElementById('screen').setAttribute('alt', altImg);
});

$thmbs[3].addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
    const altImg = this.firstElementChild.getAttribute('alt');
    console.log('altImg =', altImg);
    document.getElementById('screen').setAttribute('alt', altImg);
});

$thmbs[4].addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
    const altImg = this.firstElementChild.getAttribute('alt');
    console.log('altImg =', altImg);
    document.getElementById('screen').setAttribute('alt', altImg);
});

$thmbs[5].addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
    const altImg = this.firstElementChild.getAttribute('alt');
    console.log('altImg =', altImg);
    document.getElementById('screen').setAttribute('alt', altImg);
});

$thmbs[6].addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
    const altImg = this.firstElementChild.getAttribute('alt');
    console.log('altImg =', altImg);
    document.getElementById('screen').setAttribute('alt', altImg);
});

$thmbs[7].addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
    const altImg = this.firstElementChild.getAttribute('alt');
    console.log('altImg =', altImg);
    document.getElementById('screen').setAttribute('alt', altImg);
});

$thmbs[8].addEventListener('click', function(evt){
    evt.preventDefault();

    const bigImg = this.getAttribute('href');
    document.getElementById('screen').setAttribute('src',bigImg);
    const altImg = this.firstElementChild.getAttribute('alt');
    console.log('altImg =', altImg);
    document.getElementById('screen').setAttribute('alt', altImg);
});


/*
const $img = document.querySelector('p>img');

const $li1 = document.querySelector('li:nth-child(1)');

$li1.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big1.jpg');
});


const $li2 = document.querySelector('li:nth-child(2)');

$li2.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big2.jpg');
});

const $li3 = document.querySelector('li:nth-child(3)');

$li3.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big3.jpg');
});

const $li4 = document.querySelector('li:nth-child(4)');

$li4.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big4.jpg');
});

const $li5 = document.querySelector('li:nth-child(5)');

$li5.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big5.jpg');
});

const $li6 = document.querySelector('li:nth-child(6)');

$li6.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big6.jpg');
});

const $li7 = document.querySelector('li:nth-child(7)');

$li7.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big7.jpg');
});

const $li8 = document.querySelector('li:nth-child(8)');

$li8.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big8.jpg');
});

const $li9 = document.querySelector('li:nth-child(9)');

$li9.addEventListener ('click',function(){
    event.preventDefault(); 
    $img.removeAttribute('src');
	$img.setAttribute('src','./images/big9.jpg');
});

*/


