// 굿즈 판매량

// json 불러오기
let jsonData;

fetch("../json/goods.json")
.then (res => res.json())
.then (data => {
    jsonData = data;
    loadWindow(jsonData);
    SAsc.click(); // 클릭 이벤트 강제 실행
});

// 판매량 가격의 오름차순 내림차순
const SAsc = document.querySelector(".s_asc");
const SDesc = document.querySelector(".s_desc");
const PAsc = document.querySelector(".p_asc");
const PDesc = document.querySelector(".p_desc");
const gooImgBox = document.querySelector(".goo_imgboxs");

// 배열 생성
let saleArrey = [];

function loadWindow(jsonData) {
    saleArrey = jsonData.data.map(sales => sales);
};

// 정렬
function orders(order) {
    if(order === "sdesc") {
        saleArrey.sort((a,b) => b.sale - a.sale);
    }
    else if(order === "sasc") {
        saleArrey.sort((a,b) => a.sale - b.sale);
    }
    else if(order === "pdesc") {
        saleArrey.sort((a,b) => parseInt(b.price.replace(/,/g,'')) - parseInt(a.price.replace(/,/g,'')));

    }
    else if(order === "pasc") {
        saleArrey.sort((a,b) => parseInt(a.price.replace(/,/g,'')) - parseInt(b.price.replace(/,/g,'')));
    }
    return saleArrey;
};

// 데이터 불러오기
function dataCall(group) {    
    orders(saleArrey);

    let targetArrey = saleArrey; // 기본은 전체상품

    if(group && group !== "전체상품") {
        targetArrey = saleArrey.filter(item => item.group === group);
    }

    targetArrey.forEach(item => {
        const gooBox = document.createElement("div");
        gooBox.className = "goo_box";

        const imgBox = document.createElement("div");
        imgBox.className = "goo_img";
        const img = document.createElement("img");
        img.src = item.img;
        imgBox.appendChild(img);
        if(item.idx === 4) {
            const best = document.createElement('div')
            best.className = 'best'
            best.textContent = 'best'
            gooBox.prepend(best)
        }
        else if(item.idx === 7) {
            const best = document.createElement('div')
            best.className = 'best'
            best.textContent = 'best'
            gooBox.prepend(best)
        }
        else if(item.idx === 9) {
            const best = document.createElement('div')
            best.className = 'best'
            best.textContent = 'best'
            gooBox.prepend(best)
        }

        const catgBox = document.createElement("div");
        catgBox.className = "goo_catg";
        catgBox.textContent = item.group;
        catgBox.style.borderBottom = "1px solid #a0a0a0";

        const titleBox = document.createElement("div");
        titleBox.className = "goo_title";
        titleBox.textContent = item.title;

        const priBox = document.createElement("div");
        priBox.className = "goo_pri";
        priBox.textContent = item.price + "원";

        const saleBox = document.createElement("div");
        saleBox.className = "goo_sale";
        const p = document.createElement("p")
        p.textContent = item.sale.toLocaleString() + "명이 구매함";
        saleBox.appendChild(p)

        gooBox.appendChild(imgBox);
        gooBox.appendChild(catgBox);
        gooBox.appendChild(titleBox);
        gooBox.appendChild(priBox);
        gooBox.appendChild(saleBox);

        gooImgBox.appendChild(gooBox);
    });
}

// 판매량 내림차순 버튼
SAsc.addEventListener("click", function() {
    deletes();
    orders("sdesc");
    catgCond();
});

// 판매량 오름차순 버튼
SDesc.addEventListener("click", function() {
    deletes();
    orders("sasc");
    catgCond();
});

// 가격 내림차순 버튼
PAsc.addEventListener("click", function() {
    deletes();
    orders("pdesc");
    catgCond();
});

// 가격 오름차순 버튼
PDesc.addEventListener("click", function() {
    deletes();
    orders("pasc");
    catgCond();
});

// 그룹 생성
const catg = document.querySelector(".goo_div");

let currentcatg = catg.value;

catg.addEventListener("change", function() {
    currentcatg = catg.value;
    if(currentcatg === "전체상품") {
        deletes();
        dataCall(currentcatg);
    }
    else if(currentcatg === "야구용품") {
        deletes();
        dataCall(currentcatg);
    }
    else if(currentcatg === "응원도구") {
        deletes();
        dataCall(currentcatg);
    }
    else if(currentcatg === "악세사리") {
        deletes();
        dataCall(currentcatg);
    }
    else if(currentcatg === "의류") {
        deletes();
        dataCall(currentcatg);
    }
})

function catgCond() {
    if(currentcatg === "전체상품") {
        dataCall(currentcatg);
    }
    else if(currentcatg === "야구용품") {
        dataCall(currentcatg);
    }
    else if(currentcatg === "응원도구") {
        dataCall(currentcatg);
    }
    else if(currentcatg === "악세사리") {
        dataCall(currentcatg);
    }
    else if(currentcatg === "의류") {
        dataCall(currentcatg);
    }
}

// 데이터 삭제
function deletes() {
    gooImgBox.replaceChildren();
}

// 굿즈 수정제안

const fileInput = document.querySelector("#fileinput");
const canvasBox = document.querySelector("canvas");
const ctx = canvasBox.getContext("2d");

let Callimg;
let saveText = "";

const dpr = window.devicePixelRatio || 1;
canvasBox.width = canvasBox.clientWidth * dpr;
canvasBox.height = canvasBox.clientHeight * dpr;
ctx.scale(dpr, dpr);

// 추가 버튼
const fileCall = document.querySelector("#add");

fileCall.addEventListener("click", function() {
    fileInput.click();
});

let file

fileInput.addEventListener("change", function() {
    if (fileInput.files.length > 0) {
      file = fileInput.files[0];
      Callimg = document.createElement('img');
      Callimg.src = URL.createObjectURL(file);
      Callimg.onload = function() {
            // 캔버스에 이미지 그리기
            redraw();
       };
    };
});

// 삭제 버튼

const fileRemove = document.querySelector('#del');

fileRemove.addEventListener('click', function() {
    ctx.clearRect(0,0, canvasBox.width, canvasBox.height);
    saveText = "";
    Callimg = null;
    textX = 20;
    textY = 20;
    fileInput.value = "";
    flieText.value = "";
});

// 글상자

const flieTextAdd = document.querySelector('#write');
const flieTextBox = document.querySelector('.text_box');
const flieTextBtn = document.querySelector('#text_btn');
const flieText = document.querySelector('#text');


flieTextAdd.addEventListener('click', function() {
    flieTextBox.classList.toggle('show_text_box');
});

let textSetting = false;

flieTextBtn.addEventListener('click', function() {
    saveText = flieText.value;
    textSetting = true;
    redraw();   
});

function Textdraw(Text) {
    ctx.save();
    ctx.font = '40px Pretendard';
    ctx.fillStyle = "#222";

    // 텍스트 크기 계산
    textWidth = ctx.measureText(Text).width;
    textHeight = 40;

    if (textSetting) {
        // 생성 시 좌측 상단 기준
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(Text, textX, textY);
        textSetting = false;
    } else {
        // 드래그/회전 시 중앙 기준
        ctx.translate(textX + textWidth / 2, textY + textHeight / 2);
        ctx.rotate(angle);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(Text, 0, 0);
    }

    ctx.restore();
};

// 이미지 + 텍스트 다시 그리기 함수
function redraw() {
    ctx.clearRect(0, 0, canvasBox.width, canvasBox.height);

    if (Callimg) ctx.drawImage(Callimg, 0, 0, canvasBox.width, canvasBox.height);
    if (saveText) Textdraw(saveText);
}

// 원래대로 버튼

const flieDef = document.querySelector('#def');

flieDef.addEventListener('click', function() {
    saveText = "";
    textX = 20;
    textY = 20;
    redraw();
    fileInput.value = "";
    flieText.value = "";
});

// 텍스트 이동

let isDragging = false;
let Draggingon = false;
let offsetX = 0;
let offsetY = 0;
let textX = 20;
let textY = 20;
let textHeight = 40;
let textWidth = 0;
let angle = 0;

const textMove = document.querySelector('#move')

textMove.addEventListener('click', function() {
    Draggingon = true;
});

// 마우스가 텍스트 위에 있는지 체크
function isMouseOnText(e) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    // 드래그/회전 시 중앙 기준
    const cx = textX + textWidth / 2;
    const cy = textY + textHeight / 2;

    const dx = mouseX - cx;
    const dy = mouseY - cy;

    const cos = Math.cos(-angle);
    const sin = Math.sin(-angle);
    const rotatedX = dx * cos - dy * sin;
    const rotatedY = dx * sin + dy * cos;   

    return rotatedX >= -textWidth / 2 &&
           rotatedX <= textWidth / 2 &&
           rotatedY >= -textHeight / 2 &&
           rotatedY <= textHeight / 2;
}

// 마우스 눌렀을 때
canvasBox.addEventListener("mousedown", (e) => {
    if (!saveText) return;
    if (isMouseOnText(e)) {
        isDragging = true;

        const cx = textX + textWidth / 2;
        const cy = textY + textHeight / 2;
        const dx = e.offsetX - cx;
        const dy = e.offsetY - cy;
        const cos = Math.cos(-angle);
        const sin = Math.sin(-angle);
        offsetX = dx * cos - dy * sin;
        offsetY = dx * sin + dy * cos;
    }
});

// 마우스 뗄 때
canvasBox.addEventListener("mouseup", () => {
    isDragging = false;
});

// 마우스 이동 시
canvasBox.addEventListener("mousemove", (e) => {
    if (isDragging && Draggingon) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        // 회전 offset 반영
        textX = e.offsetX - (offsetX * cos - offsetY * sin);
        textY = e.offsetY - (offsetX * sin + offsetY * cos);

        redraw();
    }
});

function rotateText90() {
    angle += Math.PI / 2; // 시계방향 90도
    redraw();
}

// 키보드 이벤트
document.addEventListener("keydown", (e) => {
    if (!Draggingon) return;
    const step = 5;

    if (e.ctrlKey) {
        switch (e.key) {
            case "ArrowRight": rotateText90(); break;
            case "ArrowUp": textY -= step; redraw(); break;
            case "ArrowDown": textY += step; redraw(); break;
        }
    } else {
        switch (e.key) {
            case "ArrowLeft": textX -= step; redraw(); break;
            case "ArrowRight": textX += step; redraw(); break;
        }
    }
});

// 다운로드

const filedownload = document.querySelector("#download")

console.log(filedownload)

filedownload.addEventListener('click', function() {

    const imageURL = document.createElement('a')

    imageURL.href = canvasBox.toDataURL('image/png');
    imageURL.download = file.name;
    document.body.appendChild(imageURL);
    imageURL.click();
    document.body.removeChild(imageURL);
});