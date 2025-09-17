// json 불러오기
let jsonData;

fetch("../json/goods.json")
.then (res => res.json())
.then (data => {
    jsonData = data;
    loadWindow(jsonData);
});

// 판매량 가격의 오름차순 내림차순

const SAsc = document.querySelector(".s_asc");
const SDesc = document.querySelector(".s_desc");
const PAsc = document.querySelector(".p_asc");
const PDesc = document.querySelector(".p_desc");
const imgBox = document.querySelectorAll(".goo_img");

let saleArrey = [];

function loadWindow(jsonData) {
    saleArrey = jsonData.data.map(sales => sales);
    SAsc.addEventListener("click", function() {
        saleArrey.sort((a,b) => b.sale - a.sale);
        imgBox.forEach((box, index) => {
            const item = saleArrey[index];
           if (item) {
            const img = document.createElement('img');
            img.src = item.img;
            box.appendChild(img);
            }
        });
    });
};
