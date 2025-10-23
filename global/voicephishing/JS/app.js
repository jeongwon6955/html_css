// 메뉴 바로가기 버튼

const btns = document.querySelectorAll('#scroll1');
const btns1 = document.querySelectorAll('#scroll2');
const btns2 = document.querySelectorAll('#scroll3');
const btns3 = document.querySelectorAll('#scroll4');

btns.forEach(btn => {
   btn.addEventListener('click', function() {
       const target = document.querySelector('.itd')

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }) 
})

btns1.forEach(btn => {
   btn.addEventListener('click', function() {
       const target = document.querySelector('.exp')

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }) 
})

btns2.forEach(btn => {
   btn.addEventListener('click', function() {
       const target = document.querySelector('.sta')

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }) 
})

btns3.forEach(btn => {
   btn.addEventListener('click', function() {
       const target = document.querySelector('.rep')

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }) 
})

const topbtn = document.querySelector('.top-scroll')

topbtn.addEventListener('click', function() {
    const target = document.querySelector('.header')
    
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});

// 사례 데이터 불러우기
const expLi1 = document.querySelector('.exp_li_1');
const expLi2 = document.querySelector('.exp_li_2');
const expLi3 = document.querySelector('.exp_li_3');
const expLi4 = document.querySelector('.exp_li_4');
const expLi5 = document.querySelector('.exp_li_5');

const expBtns = document.querySelectorAll(".exp_lists > li");

const expData = [
    {
        id: 1,
        li1: "범죄에 연루됐거나 계좌가 조사 대상이라는 명목으로, 금융감독원·검찰청·경찰청 등의 공적 기관을 사칭 → 피해자에게 “정식 조사 중”이라며 계좌 이체 또는 현금 전달을 요구.",
        li2: "피해자가 계좌이체를 하거나 현금을 직접 건네서 막대한 금액이 빠져나감. 위 피해 사례에서 “재산을 사기 이용계좌로 이체”된 사례 존재.",
        li3: "정부 기관이나 수사기관이 전화로 계좌이체·현금요구를 하면 100% 사기라고 의심해야 함.",
        li4: "공식 홈페이지나 전화번호로 직접 확인.",
        li5: "강요·위협·비밀 유지 요구가 있으면 더 의심."
    },
    {
        id: 2,
        li1: "저금리 대출 가능”, “대환대출 해준다” 등 금융회사 명의를 빌려 문자·전화로 접근 → 개인정보(계좌번호, 공인인증서 비밀번호 등)를 요구 → 고금리 대출을 먼저 받게 유도 → 돈 이체.",
        li2: "고금리 대출로 돈이 빠져나가거나 대출 실행 전 계좌가 사기범에게 넘어가 피해가 발생함.",
        li3: "대출 권유 전화·문자에는 즉시 반응하지 말고 해당 금융회사에 직접 확인.",
        li4: "대출 처리비용, 수수료 등을 선입금하라고 하면 사기 가능성 높음.",
        li5: "금융회사가 홍보했어도 반드시 공식 창구를 이용."
    },
    {
        id: 3,
        li1: "“소액 결제가 됐다”, “배송문자” 등을 미끼로 문자를 보내고 → 링크 클릭 유도 → 악성 앱 설치 유도(원격제어) → 피해자의 휴대폰·계좌 정보를 탈취함.",
        li2: "피해자 몰래 스마트폰을 제어당해 수천만 원 대출이 실행되거나 계좌에서 돈이 빠져나가는 사례 존재.",
        li3: "출처 불분명한 문자/URL 절대 클릭 금지.",
        li4: "앱 설치 요구 시 반드시 의심하고, 공식 앱스토어 확인.",
        li5: "스마트폰 보안 설정 강화, 원격 접근 권한 확인."
    },
    {
        id: 4,
        li1: "피해자의 자녀·친구·지인을 사칭하여 “휴대폰 깨졌다”, “급히 돈 보낼 일이 생겼다” 등의 문자 또는 전화 → 피해자에게 계좌이체 요청.",
        li2: "평소 연락 없던 번호로 지인이 보낸 것처럼 속여 금액을 이체하게 됨. 사기 통장으로 송금되는 형태가 많음.",
        li3: "지인이 보낸 것 같아도 처음엔 전화로 직접 확인.",
        li4: "계좌이체 요청이 있을 땐 “지금 진짜 너냐?” 하고 확인할 수 있는 수단을 사용.",
        li5: "돈 보내기 전에 한 번 더 차분히 생각."
    },
    {
        id: 5,
        li1: "“통신요금 미납”, “택배 배송비 결제”, “계정이 정지된다” 등의 문자·전화 → 링크 클릭이나 ARS 응답 유도 → 개인정보·계좌 정보 탈취 또는 악성 앱 설치 유도.",
        li2: "통신사·택배사를 사칭했기 때문에 “별로 의심스럽지 않다”고 느껴 피해가 발생함. 계좌정보 요구나 소액결제 내역 확인유도로 이어지는 경우 있음.",
        li3: "통신사·택배사에서도 계좌이체나 설치를 요구하지 않음.",
        li4: "미납요금이라 해도 공식 홈페이지나 앱 로그인해서 직접 확인.",
        li5: "문자로 링크가 오는 경우엔 특히 조심."
    }
]

window.addEventListener("DOMContentLoaded", function() {
    const item = expData[0];
    expLi1.textContent = item.li1;
    expLi2.textContent = item.li2;
    expLi3.textContent = item.li3;
    expLi4.textContent = item.li4;
    expLi5.textContent = item.li5;
    expBtns[0].style.color = "black";
})

expBtns.forEach((btn,index) => {
    btn.addEventListener('click', function() {
        const item = expData[index];
        expBtns.forEach(btn => {
            btn.style.color = "#8f8f8f";
        });
        expLi1.textContent = item.li1;
        expLi2.textContent = item.li2;
        expLi3.textContent = item.li3;
        expLi4.textContent = item.li4;
        expLi5.textContent = item.li5;
        expBtns[index].style.color = "black"
    })
})


