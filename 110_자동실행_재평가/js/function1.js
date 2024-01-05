const $thmbs = $('.slides>ul>li>a');
const $btnPrev = $('.slides>.pagination>a.prev');
const $btnNext = $('.slides>.pagination>a.next');
const $play = $('.slides>.button>.play>a');
const $stop = $('.slides>.button>.stop>a');
const $screen = document.getElementById('screen');

let nowIdx = 0;
let oldIdx = nowIdx;
let intervalKey = null;

for(let i = 0; i < $thmbs.length; i++){
    $thmbs[i].addEventListener('click', function(evt){
        evt.preventDefault();

        oldIdx = nowIdx;
        nowIdx = i;

        this.parentElement.setAttribute('class','on');
        $thmbs[oldIdx].parentElement.removeAttribute('class');

        const bigImg = this.getAttribute('href');
        $screen.setAttribute('src', bigImg);
    });
}

$btnPrev.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx > 0){
        nowIdx--;
    }else{
        nowIdx = $thmbs.length - 1;
    }

    $thmbs[nowIdx].parentElement.setAttribute('class','on');
    $thmbs[oldIdx].parentElement.removeAttribute('class');

    const bigImg = $thmbs[nowIdx].getAttribute('href');
    $screen.setAttribute('src', bigImg);
    
})

$btnNext.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx < $thmbs.length - 1){
        nowIdx++;
    }else{
        nowIdx = 0
    }

    $thmbs[nowIdx].parentElement.setAttribute('class','on');
    $thmbs[oldIdx].parentElement.removeAttribute('class');

    const bigImg = $thmbs[nowIdx].getAttribute('href');
    $screen.setAttribute('src', bigImg);
    
})

const autoPlay = function(sec){
    
    intervalKey = setInterval(function(){

        if(nowIdx < $thmbs.length - 1){
            nowIdx++;
        }else{
            nowIdx = 0;
        }

    $thmbs[nowIdx].parentElement.setAttribute('class','on');
    $thmbs[oldIdx].parentElement.removeAttribute('class');

    const bigImg = $thmbs[nowIdx].getAttribute('href');
    $screen.setAttribute('src', bigImg);
    
    },sec*1000)
}

$(window).on('load', function(){
    autoPlay(3);
})

$('.slides>ul').on('mouseenter', function(){
    clearInterval(intervalKey);
    autoPlay(7);
})

$('.slides>ul').on('mouseleave', function(){
    clearInterval(intervalKey);
    autoPlay(3);
})

$('.play').on('mouseenter', function(){
    clearInterval(intervalKey);
    autoPlay(0.3);
})

$('.play').on('mouseleave', function(){
    clearInterval(intervalKey);
    autoPlay(3);
})

$('.stop').on('click', function(){
    clearInterval(intervalKey);
})

$('.stop').on('mouseleave', function(){
    clearInterval(intervalKey);
    autoPlay(3);
})