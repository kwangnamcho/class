const $thmbs = document.querySelectorAll('.slides>ul>li>a');
const $screen = document.getElementById('screen');
const $btnPrev = document.querySelector('.slides>.pagination>.prev');
const $btnNext = document.querySelector('.slides>.pagination>.next');
const $play = document.querySelector('slides>.button>.play');
const $stop = document.querySelector('slides>.button>.stop');

//console.log(`$thmbs = `, $thmbs);

let nowIdx = 0;
let oldIdx = nowIdx;
let intervalKey = null;

const forFn = function(){
    $thmbs[nowIdx].parentElement.setAttribute('class', 'on');
    $thmbs[oldIdx].parentElement.removeAttribute('class');

    const img = $thmbs[nowIdx].getAttribute('href');
    $screen.setAttribute('src', img);
}

const btnFn = function(){
    $thmbs[nowIdx].parentElement.setAttribute('class', 'on');
    $thmbs[oldIdx].parentElement.removeAttribute('class');

    const img = $thmbs[nowIdx].getAttribute('href');
    $screen.setAttribute('src', img);
}

const autoPlay = function(sec){
    intervalKey = setInterval(function(){
        if(nowIdx < $thmbs.length - 1){
            nowIdx++;
        }else{
            nowIdx = 0;
        }

        forFn();

    },sec*1000)
}

$(window).on('load', function(){
    //alert('load 이벤트가 발생함');
    autoPlay(3);
});

for(let i = 0; i < $thmbs.length; i++){
    $thmbs[i].addEventListener('click', function(evt){
        evt.preventDefault();

        oldIdx = nowIdx;
        nowIdx = i;

    forFn();
    })
}

$btnPrev.addEventListener('click', function(evt){
    evt.preventDefault();

    oldIdx = nowIdx;

    if(nowIdx > 0){
        nowIdx--;
    }else{
        nowIdx = 4;
    }

    btnFn();
});

$btnNext.addEventListener('click', function(evt){
    evt.preventDefault();

    oldIdx = nowIdx;

    if(nowIdx < $thmbs.length - 1){
        nowIdx++;
    }else{
        nowIdx = 0;
    }

    btnFn();
});

