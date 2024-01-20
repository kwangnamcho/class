const $thmbs = $('section>.bigImg>ul>li>a');
const $btnNext = $('section>.thmbs>.container>.arrow>a.next');
const $btnPrev = $('section>.thmbs>.container>.arrow>a.prev');
const $screen = document.getElementById('screen');

console.log('$thmbs =', $thmbs)
console.log('$btnNext =', $btnNext)
console.log('$btnPrev =', $btnPrev)

let nowIdx = 0;
let oldIdx = nowIdx;

for(let i = 0; i < $thmbs.length; i++){
    $thmbs[i].addEventListener('click', function(evt){
        evt.preventDefault();

        console.log('this =', this);

        oldIdx = nowIdx;
        nowIdx = i;

        const bigImg = this.getAttribute('href');
        $screen.setAttribute('src', bigImg);
    });

}
