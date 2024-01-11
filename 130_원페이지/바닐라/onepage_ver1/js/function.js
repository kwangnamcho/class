//DOM 요소 선택
const $mnus = document.querySelectorAll('header>.container>nav>.gnb>li>a');
const $top = document.querySelector('aside>a.top')
const arrTopVal = [];

//활성화표시에 사용할 변수
let nowIdx = 0;
let oldIdx = nowIdx;

//각 article의 top값을 저장하는 배열
//어떤 요소의 top 값(body로부터 떨어진 거리)을 구하는 $DOM.offsetTop 속성
arrTopVal[0] = document.querySelector('.cont1').offsetTop;
arrTopVal[1] = document.querySelector('.cont2').offsetTop;
arrTopVal[2] = document.querySelector('.cont3').offsetTop;
arrTopVal[3] = document.querySelector('.cont4').offsetTop;
arrTopVal[4] = document.querySelector('.cont5').offsetTop;

//반복되는 코드를 함수화

const $PagiAni = () => {
    $mnus[nowIdx].parentElement.setAttribute('class','on');
    $mnus[oldIdx].parentElement.removeAttribute('class');
}

//메뉴에 대한 클릭이벤트
$mnus.forEach(($mnu,idx)=>{
    $mnu.addEventListener('click', (evt)=>{
        evt.preventDefault();

        oldIdx = nowIdx;
        nowIdx = idx;

        $PagiAni();

        window.scrollTo({
            top: arrTopVal[idx],
            left: 0,
            behavior: 'smooth'
        })
    })
})


//화살표에 대한 클릭이벤트
$top.addEventListener('click',(evt)=>{
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx = 0;

    $PagiAni();

    window.scrollTo({
        top: arrTopVal[0],
        left: 0,
        behavior: 'smooth'
    })

})


