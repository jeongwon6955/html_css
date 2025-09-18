// json 불러오기
let jsonData;

fetch("../json/goods.json")
.then (res => res.json())
.then (data => {
    jsonData = data;
    loadWindow(jsonData);
    SAsc.click(); // 클릭 이벤트 강제 실행
    best();
});

// 판매량 가격의 오름차순 내림차순

const SAsc = document.querySelector(".s_asc");
const SDesc = document.querySelector(".s_desc");
const PAsc = document.querySelector(".p_asc");
const PDesc = document.querySelector(".p_desc");
const gooImgBox = document.querySelector(".goo_imgboxs");
console.log(gooImgBox)

// 배열 생성
let saleArrey = [];

// json데이터 saleArrey배열에 넣기
function loadWindow(jsonData) {
    saleArrey = jsonData.data.map(sales => sales);
};

// 데이터 불러오기
function dataCall({order,group}) {
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
    best();

    let targetArrey = saleArrey; // 기본은 전체상품

    if(group && group !== "전체상품") {
        targetArrey = saleArrey.filter(item => item.group === group);
        // console.log(targetArrey);
    }

    targetArrey.forEach(item => {
        // 1. 상품 하나를 담는 박스 생성
        const gooBox = document.createElement("div");
        gooBox.className = "goo_box";

        // 2. 각각의 요소 생성
        const imgBox = document.createElement("div");
        imgBox.className = "goo_img";
        const img = document.createElement("img");
        img.src = item.img;
        imgBox.appendChild(img);

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

       // 3. gooBox 안에 append
       gooBox.appendChild(imgBox);
       gooBox.appendChild(catgBox);
       gooBox.appendChild(titleBox);
       gooBox.appendChild(priBox);
       gooBox.appendChild(saleBox);

       // 4. 부모 박스(gooImgBox)에 append
       gooImgBox.appendChild(gooBox);
    });
}

// best 태그

let idxArrey = [];
function best() {
    idxArrey = saleArrey.map(item => item.idx);
}

// 판매량 내림차순 버튼
SAsc.addEventListener("click", function() {
    deletes();
    dataCall({order:"sdesc"});
});

// 판매량 오름차순 버튼
SDesc.addEventListener("click", function() {
    deletes();
    dataCall({order:"sasc"});
});

// 가격 내림차순 버튼
PAsc.addEventListener("click", function() {
    deletes();
    dataCall({order:"pdesc"});
});

// 가격 오름차순 버튼
PDesc.addEventListener("click", function() {
    deletes();
    dataCall({order:"pasc"});
});

// 그룹 생성

const catg = document.querySelector(".goo_div");

let currentcatg = catg.value;

catg.addEventListener("change", function() {
    currentcatg = catg.value;
    if(currentcatg === "전체상품") {
        deletes();
        dataCall({group: currentcatg});
    }
    else if(currentcatg === "야구용품") {
        deletes();
        dataCall({group: currentcatg});
    }
    else if(currentcatg === "응원도구") {
        deletes();
        dataCall({group: currentcatg});
    }
    else if(currentcatg === "악세사리") {
        deletes();
        dataCall({group: currentcatg});
    }
    else if(currentcatg === "의류") {
        deletes();
        dataCall({group: currentcatg});
    }
})

// 데이터 삭제

function deletes() {
    gooImgBox.replaceChildren();
}
