// json 불러오기
let json_data;

fetch("../json/visitors.json")
.then (res => res.json())
.then (json => {
    json_data = json;
    loadWindow(json_data, "row");
})

// 가로 세로 선택
const swap = document.querySelector(".graph_bottom");
const swap1 = document.querySelector(".graph_top");
const chaColumn = document.querySelector(".cha_column");
const chaRow = document.querySelector(".cha_row");

let currentTarget = "row"

chaRow.addEventListener("click", function() {
    deletes();
    loadWindow(json_data, "row");
    currentTarget = "row"
});

chaColumn.addEventListener("click", function() {
    deletes();
    loadWindow(json_data, "col");
    currentTarget = "col"
});

function num(num) {
    if(num === "row") {
        loadWindow(json_data, "row");
    }
    else if(num === "col") {
        loadWindow(json_data, "col");
    }
}


// 요일 선택
const pick_week = document.querySelector(".cha_week")
const data_change = document.querySelector(".graph_week > h2 > span")

let currentday = pick_week.value

pick_week.addEventListener("change", function() {
    currentday = pick_week.value

    data_change.innerHTML = currentday + "요일"

    deletes();
    num(currentTarget);
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
    deletes();
    num(currentTarget);
})

weekend_leag.addEventListener("click", function() {
    pick_leag.innerHTML = "주말리그"
    currentleag = "주말리그"
    deletes();
    num(currentTarget);
})

dawn_leag.addEventListener("click", function() {
    pick_leag.innerHTML = "새벽리그"
    currentleag = "새벽리그"
    deletes();
    num(currentTarget);
})

// 방문자 데이터
const vist = document.querySelector(".visitant");

// 그래프 단위
const TiemUnit = document.querySelector(".graph_top_left")
const graph = document.querySelector(".graph")
const VitUnit = document.querySelector(".graph_right")

function loadWindow(json_data, RowCol) {
    json_data.data.forEach(leag => {
        if(leag.name === currentleag) {
            leag.visitors.forEach(week => {
                if(week.day === currentday) {
                    const keys = Object.keys(week.visitor);
                    const keys1 = Object.values(week.visitor);
                    // 위쪽 방문객
                    for(let i = 0; i < keys.length; i++) {
                        const vis_box = document.createElement("p");
                        vis_box.style.color = "#222";
                        vis_box.innerHTML = keys[i] + " : " + keys1[i] + "명";
                        vist.appendChild(vis_box);
                    }

                    // 그래프 방문객 시간대
                    for(let i = 0; i < keys.length; i++) {
                        const grp_box = document.createElement("p");
                        grp_box.style.color = "#fff";
                        grp_box.innerHTML = keys[i];
                        if(RowCol === "row") {
                            TiemUnit.appendChild(grp_box);
                            VitUnit.classList.remove("show_VitUnit")
                        }
                        else if(RowCol === "col") {
                            VitUnit.classList.add("show_VitUnit")
                            VitUnit.appendChild(grp_box);
                        }
                    }

                    // 그래프 막대 출력
                    for(let i = 0; i < keys.length; i++) {
                        const grp_ele = document.createElement("div");
                        const grp_ele1 = document.createElement("p");
                        grp_ele.style.background = "#A14E4E";
                        grp_ele.style.opacity = "0";
                        grp_ele1.textContent = keys1[i];
                        graph.appendChild(grp_ele);

                        if(RowCol === "row") {
                            graph.classList.remove("show_rod_box")
                            grp_ele.style.width = "0px";
                            grp_ele.style.transition = "width 0.5s ease, opacity 1.5s ease";
                            grp_ele.classList.remove("show_rod")

                            setTimeout(() => {
                               grp_ele.style.width = (keys1[i] * 2.3) + "px";
                               grp_ele.style.opacity = "1";
                            }, 50);
                        }
                        else if(RowCol === "col") {
                            graph.classList.add("show_rod_box")
                            grp_ele.style.width = "60px";
                            grp_ele.style.height = "0";
                            grp_ele.style.transition = "height 0.5s ease, opacity 1.5s ease";
                            grp_ele.classList.add("show_rod")

                            setTimeout(() => {
                               grp_ele.style.height = (keys1[i] * 0.9) + "px";
                               grp_ele.style.opacity = "1";
                            }, 50);
                        }

                        setTimeout(() => {
                           grp_ele.appendChild(grp_ele1)
                        }, 350);
                    }

                }
            })
        }
    });

    // 방문자 수
    for(let i = 0; i <= 500; i++) {
        if(i % 50 === 0) {
            const grp2_box = document.createElement("p");
            grp2_box.style.color = "#fff";
            grp2_box.innerHTML = i;

            if(RowCol === "row") {
                VitUnit.appendChild(grp2_box);
                TiemUnit.classList.remove("show_TiemUnit");
            } 
            else if(RowCol === "col") {
                TiemUnit.replaceChildren();
                recall();
                TiemUnit.classList.add("show_TiemUnit");
            }
        }
    }
}

function recall() {
    for(let i = 500; i >= 0; i--) {
        if(i % 50 === 0) {
            const grp2_box = document.createElement("p");
            grp2_box.style.color = "#fff";
            grp2_box.innerHTML = i;
            TiemUnit.appendChild(grp2_box);
        }
    }
}



// 데이터 삭제

function deletes() {
    vist.replaceChildren();
    TiemUnit.replaceChildren();
    VitUnit.replaceChildren();
    graph.replaceChildren();
}

