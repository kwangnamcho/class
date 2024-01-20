const $mnus = document.querySelectorAll('header>.container>nav>.gnb>li>a')
const $top = document.querySelector('a.top');

//각 article의 top값을 저장하는 배열
//어떤 요소의 top 값(body로부터 떨어진 거리)을 구하는 $DOM.offsetTop 속성
const arrTopVal = [];
arrTopVal[0] = document.querySelector('.cont1').offsetTop; 
arrTopVal[1] = document.querySelector('.cont2').offsetTop; 
arrTopVal[2] = document.querySelector('.cont3').offsetTop; 
arrTopVal[3] = document.querySelector('.cont4').offsetTop; 
arrTopVal[4] = document.querySelector('.cont5').offsetTop; 

let nowIdx = 0;
let oldIdx = nowIdx;


const PagiAni = function(){
    $mnus[nowIdx].parentElement.setAttribute('class','on');
    $mnus[oldIdx].parentElement.removeAttribute('class'); 
}

//메뉴에 대한 클릭이벤트
$mnus.forEach(($mnu,idx)=>{
    $mnu.addEventListener('click',(evt)=>{
        evt.preventDefault();
        oldIdx = nowIdx;
        nowIdx = idx;
    
        
        PagiAni();
        //window.scrollTo(0, 500*idx);

        //스크롤바의 top값에 변화를 줘서 smooth하게 움직이게 설정

        window.scrollTo({
            top: arrTopVal[nowIdx],
            left: 0,
            behavior: 'smooth'
        });


    })
 })

 //화살표에 대한 클릭이벤트
 $top.addEventListener('click',(evt)=>{
    evt.preventDefault();
    
    oldIdx = nowIdx;
    nowIdx = 0;

    PagiAni();

    window.scrollTo({
        top: arrTopVal[nowIdx],
        left: 0,
        behavior: 'smooth'
    })

 })
