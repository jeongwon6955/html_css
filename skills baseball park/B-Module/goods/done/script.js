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

// 추가 버튼
const fileCall = document.querySelector("#add");

fileCall.addEventListener("click", function() {
    fileInput.click();
});

fileInput.addEventListener("change", function() {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const Callimg = document.createElement('img');
      Callimg.src = URL.createObjectURL(file);
      Callimg.onload = function() {
            // 캔버스 크기 맞추기
            canvasBox.width = Callimg.width;
            canvasBox.height = Callimg.height;
            // 캔버스에 이미지 그리기
            ctx.drawImage(Callimg, 0, 0, canvasBox.width, canvasBox.height);
       };
    };
});

// 삭제 버튼

const fileRemove = document.querySelector('#del');

fileRemove.addEventListener('click', function() {
    ctx.clearRect(0,0, canvasBox.width, canvasBox.height);
    fileLoad.value = "";
});