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
// const imgBox = document.querySelectorAll(".goo_img");
// const catgBox = document.querySelectorAll(".goo_catg");
// const titleBox = document.querySelectorAll(".goo_title");
// const priBox = document.querySelectorAll(".goo_pri");
// const saleBox = document.querySelectorAll(".goo_sale");
// const Box = document.querySelectorAll(".goo_box");
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
        const gooBox = document.createElement("div");
        const imgBox = document.createElement("div");
        const catgBox = document.createElement("div");
        const titleBox = document.createElement("div");
        const priBox = document.createElement("div");
        const saleBox = document.createElement("div");
        gooImgBox.appendChild(gooBox);
        gooBox.forEach(item => {
            item.appendChild(imgBox);
            item.appendChild(catgBox);
            item.appendChild(titleBox);
            item.appendChild(priBox);
            item.appendChild(saleBox);
        })
        gooBox.className = "goo_box";
    });

    imgBox.forEach((box, index) => {
        const item = targetArrey[index];
        if(!item) return;
        const img = document.createElement('img');
        img.src = item.img;
        box.appendChild(img);
        const boxs = Number(idxArrey[index]);
        if(boxs === 4){
            const best = document.createElement('div');
            best.textContent = 'BEST';
            best.className = 'best';
            box.prepend(best);
        }
        else if(boxs === 7) {
            const best = document.createElement('div');
            best.textContent = 'BEST';
            best.className = 'best';
            box.prepend(best);
        }
        else if(boxs === 9) {
            const best = document.createElement('div');
            best.textContent = 'BEST';
            best.className = 'best';
            box.prepend(best);
        }
    });
    catgBox.forEach((box, index) => {
        const item = targetArrey[index];
        box.innerHTML = item.group;
        box.style.borderBottom = "1px solid #a0a0a0";
    });
    titleBox.forEach((box, index) => {
        const item = targetArrey[index];
        box.innerHTML = item.title;
    });
    priBox.forEach((box, index) => {
        const item = targetArrey[index];
        box.innerHTML = item.price + "원";
    });
    saleBox.forEach((box, index) => {
        const item = targetArrey[index];
        const p = document.createElement('p');
        p.innerHTML = item.sale.toLocaleString() + "명이 구매함";
        box.appendChild(p);
    });
}

// best 태그

let idxArrey = [];
function best() {
    idxArrey = saleArrey.map(item => item.idx);
}

// 판매량 내림차순 버튼
SAsc.addEventListener("click", function() {
    // deletes();
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
    imgBox.forEach(box => box.replaceChildren());
    catgBox.forEach(box => box.replaceChildren());
    titleBox.forEach(box => box.replaceChildren());
    priBox.forEach(box => box.replaceChildren());
    saleBox.forEach(box => box.replaceChildren());
}
