const btn = document.querySelector('#scroll1')
const btn1 = document.querySelector('#scroll2')
// console.log('btn')
btn.addEventListener('click', function() {
    const target = document.querySelector('#main1')

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

btn1.addEventListener('click', function() {
    const target = document.querySelector('#main2')

    target.scrollIntoView({
        behavior: 'smooth',
        black: 'start'
    })
})

const topbtn = document.querySelector('.top-scroll')

topbtn.addEventListener('click', function() {
    const target = document.querySelector('.header')
    
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

//버튼 슬라이드
;
const slide = document.querySelector('.cases');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currenttarget = 0;

function slideshow(){
    slide.style.transform = `translateX(-${currenttarget * 400}px)`
};


next.addEventListener('click', function() {
    if(currenttarget < 2) {
        currenttarget++
    }
    if(currenttarget === 2) {
        next.style.visibility = 'hidden'
    }
    prev.style.visibility = 'visible'
    slideshow();
});

prev.addEventListener('click', function() {
    currenttarget--
    if(currenttarget === 0) {
      prev.style.visibility = 'hidden'   
    }
    next.style.visibility = 'visible'
    slideshow();
});

if(currenttarget === 0) {
    prev.style.visibility = 'hidden'
}

// 모델창

const review = [
    {
        id: 1,
        title: '첫번째 사례: 우체국·금융기관 사칭 후 “보안계좌로 이체” 지시',
        text: '57세 자영업자 ‘이진식’ 씨는 우체국에서 신용카드가 반송되었다는 전화를 받았습니다.이후 ‘사이버수사대’와 ‘금융감독원’을 사칭한 사기범이 “범죄에 이용되었다”며 보안계좌로 자금을 옮기라고 요구했고,실제로 이체를 했습니다. 몇 일 뒤 사기임을 깨달았지만, 돈은 이미 사라진 뒤였습니다'
    },
    {
        id: 2,
        title: '두번째 사례: 국제 로맨스 스캠 조직의 금전 편취 (5000만 원 규모)',
        text: 'SNS 등을 통해 외국인 군인 또는 의사 등을 사칭하는 "로맨스 스캠" 조직이 있었습니다.피해자가 신뢰를 형성한 뒤, 피고인은 조직 지시에 따라 체크카드를 몰래 받거나 계좌 이체를 유도해 총 5천만 원 상당을 편취했습니다.'
    }
];

const modalbtn = document.querySelectorAll('.case > span');
const modal = document.querySelector('.modal-box');
const closebtn = document.querySelector('.close > i');
// console.log(modalbtn)

const cases = document.querySelector('.cases');
const modaltitle = document.querySelector('.modal > h3');
const modaltext = document.querySelector('.modal > p');

function textshow(index) {
    const item = review[index];
    modaltitle.textContent = item.title;
    modaltext.textContent = item.text;
}
modalbtn.forEach(function(currentindex, index) {
    currentindex.addEventListener('click', function() {
        modal.classList.add('open-modal-box');
        document.body.style.overflow = 'hidden';
        textshow(index);
    });
});

// modalbtn.addEventListener('click', function() {
//     modal.classList.add('open-modal-box');
//     document.body.style.overflow = 'hidden';
// });

closebtn.addEventListener('click', function() {
    modal.classList.remove('open-modal-box');
    document.body.style.overflow = 'auto';
});
