const $thmbs = document.querySelectorAll('section > .container > .thmbs > ul > li > a');
console.log('$thmbs =', $thmbs);
console.log(Array.isArray(Array.from($thmbs))); // true

const $screen = document.getElementById('screen');

let nowIdx = 0;
let oldIdx = nowIdx;
const $btnNext = document.querySelector('.next')
const $btnPrev = document.querySelector('.prev')

$btnNext.addEventListener('click', function(evt){
    evt.preventDefault();
 
    oldIdx = nowIdx;
    if(nowIdx < $thmbs.length - 1){
       nowIdx++;
    } else{
       nowIdx = 0 
    }
 
    $thmbs[nowIdx].parentElement.setAttribute('class','on');
    $thmbs[oldIdx].parentElement.removeAttribute('class');
 
    const bigImg = $thmbs[nowIdx].getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);
 
});
 
$btnPrev.addEventListener('click', function(evt){
    evt.preventDefault();
 
    oldIdx = nowIdx;
    if(nowIdx > 0){
       nowIdx--;
    } else{
       nowIdx = $thmbs.length - 1;
    }
 
    $thmbs[nowIdx].parentElement.setAttribute('class','on');
    $thmbs[oldIdx].parentElement.removeAttribute('class');
 
    const bigImg = $thmbs[nowIdx].getAttribute('href');
    document.getElementById('screen').setAttribute('src', bigImg);
 
    const altImg = $thmbs[nowIdx].firstElementChild.getAttribute('alt');
    console.log('altImg =', altImg);
    $screen.setAttribute('alt', altImg);   
});

for (let i = 0; i < $thmbs.length; i++) {
    $thmbs[i].addEventListener('click', function(evt) {
    evt.preventDefault();

    console.log('this =', this);

    oldIdx = nowIdx;
    nowIdx = i;

    this.parentElement.setAttribute('class', 'on');

    $thmbs[oldIdx].parentElement.removeAttribute('class');

    const bigImg = this.getAttribute('href');
    $screen.firstElementChild.setAttribute('src', bigImg);
  });
}

