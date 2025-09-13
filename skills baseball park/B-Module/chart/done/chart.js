// json 불러오기
let json_data;

fetch("../json/visitors.json")
.then (res => res.json())
.then (json => {
    json_data = json;
    loadWindow(json_data)
    // console.log(json_data)
})

// 요일 선택
const pick_week = document.querySelector(".cha_week")
const data_change = document.querySelector(".graph_week > h2 > span")

let currentday = pick_week.value

pick_week.addEventListener("change", function() {
    currentday = pick_week.value

    data_change.innerHTML = currentday + "요일"
})

// 리그 선택
const night_leag = document.querySelector(".cha_night")
const weekend_leag = document.querySelector(".cha_weekend")
const dawn_leag = document.querySelector(".cha_dawn")
const pick_leag = document.querySelector(".pick_leag")

let currentleag = "나이트리그"

night_leag.addEventListener("click", function() {
    pick_leag.innerHTML = "나이트리그"
    currentleag = "나이트리그"
})

weekend_leag.addEventListener("click", function() {
    pick_leag.innerHTML = "주말리그"
    currentleag = "주말리그"
})

dawn_leag.addEventListener("click", function() {
    pick_leag.innerHTML = "새벽리그"
    currentleag = "새벽리그"
})

// 방문자 데이터
const visitant = document.querySelector(".visitant")

function loadWindow(json_data) {
    json_data.data.forEach(leag => {
        if(leag.name === currentleag) {
            leag.visitors.forEach(week => {
                if(week.day === currentday) {
                    
                }
            })
        }
    });
}

